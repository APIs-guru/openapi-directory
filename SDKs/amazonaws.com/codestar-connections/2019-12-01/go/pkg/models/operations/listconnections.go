package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListConnectionsXAmzTargetEnum string

const (
	ListConnectionsXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections ListConnectionsXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections"
)

type ListConnectionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListConnectionsRequest struct {
	QueryParams ListConnectionsQueryParams
	Headers     ListConnectionsHeaders
	Request     shared.ListConnectionsInput `request:"mediaType=application/json"`
}

type ListConnectionsResponse struct {
	ContentType           string
	ListConnectionsOutput *shared.ListConnectionsOutput
	StatusCode            int64
}
