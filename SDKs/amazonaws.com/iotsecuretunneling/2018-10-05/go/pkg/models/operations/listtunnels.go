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
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTunnelsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
