package operations

import (
	"openapi/pkg/models/shared"
)

type ListHostsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHostsXAmzTargetEnum string

const (
	ListHostsXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts ListHostsXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts"
)

type ListHostsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHostsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHostsRequest struct {
	QueryParams ListHostsQueryParams
	Headers     ListHostsHeaders
	Request     shared.ListHostsInput `request:"mediaType=application/json"`
}

type ListHostsResponse struct {
	ContentType     string
	ListHostsOutput *shared.ListHostsOutput
	StatusCode      int64
}
