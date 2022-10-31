package operations

import (
	"openapi/pkg/models/shared"
)

type FinalizeDeviceClaimPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type FinalizeDeviceClaimHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type FinalizeDeviceClaimRequestBody struct {
	Tags map[string]string `json:"tags,omitempty"`
}

type FinalizeDeviceClaimRequest struct {
	PathParams FinalizeDeviceClaimPathParams
	Headers    FinalizeDeviceClaimHeaders
	Request    FinalizeDeviceClaimRequestBody `request:"mediaType=application/json"`
}

type FinalizeDeviceClaimResponse struct {
	ContentType                 string
	FinalizeDeviceClaimResponse *shared.FinalizeDeviceClaimResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	PreconditionFailedException *interface{}
	ResourceConflictException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
