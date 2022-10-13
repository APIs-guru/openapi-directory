package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstalledComponentsPathParams struct {
	CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
}

type ListInstalledComponentsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListInstalledComponentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInstalledComponentsRequest struct {
	PathParams  ListInstalledComponentsPathParams
	QueryParams ListInstalledComponentsQueryParams
	Headers     ListInstalledComponentsHeaders
}

type ListInstalledComponentsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ListInstalledComponentsResponse *shared.ListInstalledComponentsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
