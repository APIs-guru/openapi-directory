package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateClientDeviceFromCoreDevicePathParams struct {
	CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
}

type BatchDisassociateClientDeviceFromCoreDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDisassociateClientDeviceFromCoreDeviceRequestBody struct {
	Entries []shared.DisassociateClientDeviceFromCoreDeviceEntry `json:"entries"`
}

type BatchDisassociateClientDeviceFromCoreDeviceRequest struct {
	PathParams BatchDisassociateClientDeviceFromCoreDevicePathParams
	Headers    BatchDisassociateClientDeviceFromCoreDeviceHeaders
	Request    BatchDisassociateClientDeviceFromCoreDeviceRequestBody `request:"mediaType=application/json"`
}

type BatchDisassociateClientDeviceFromCoreDeviceResponse struct {
	AccessDeniedException                               *interface{}
	BatchDisassociateClientDeviceFromCoreDeviceResponse *shared.BatchDisassociateClientDeviceFromCoreDeviceResponse
	ContentType                                         string
	InternalServerException                             *interface{}
	ResourceNotFoundException                           *interface{}
	StatusCode                                          int64
	ThrottlingException                                 *interface{}
	ValidationException                                 *interface{}
}
