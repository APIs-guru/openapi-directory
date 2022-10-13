package operations

import (
	"openapi/pkg/models/shared"
)

type ListClientDevicesAssociatedWithCoreDevicePathParams struct {
	CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
}

type ListClientDevicesAssociatedWithCoreDeviceQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListClientDevicesAssociatedWithCoreDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListClientDevicesAssociatedWithCoreDeviceRequest struct {
	PathParams  ListClientDevicesAssociatedWithCoreDevicePathParams
	QueryParams ListClientDevicesAssociatedWithCoreDeviceQueryParams
	Headers     ListClientDevicesAssociatedWithCoreDeviceHeaders
}

type ListClientDevicesAssociatedWithCoreDeviceResponse struct {
	AccessDeniedException                             *interface{}
	ContentType                                       string
	InternalServerException                           *interface{}
	ListClientDevicesAssociatedWithCoreDeviceResponse *shared.ListClientDevicesAssociatedWithCoreDeviceResponse
	ResourceNotFoundException                         *interface{}
	StatusCode                                        int64
	ThrottlingException                               *interface{}
	ValidationException                               *interface{}
}
