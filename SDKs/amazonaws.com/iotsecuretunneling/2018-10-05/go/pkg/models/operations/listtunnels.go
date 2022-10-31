package operations

import (
	"openapi/pkg/models/shared"
)

type ListTunnelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTunnelsXAmzTargetEnum string

const (
	ListTunnelsXAmzTargetEnumIoTSecuredTunnelingListTunnels ListTunnelsXAmzTargetEnum = "IoTSecuredTunneling.ListTunnels"
)

type ListTunnelsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTunnelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTunnelsRequest struct {
	QueryParams ListTunnelsQueryParams
	Headers     ListTunnelsHeaders
	Request     shared.ListTunnelsRequest `request:"mediaType=application/json"`
}

type ListTunnelsResponse struct {
	ContentType         string
	ListTunnelsResponse *shared.ListTunnelsResponse
	StatusCode          int64
}
