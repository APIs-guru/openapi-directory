package operations

import (
	"openapi/pkg/models/shared"
)

type FinalizeDeviceClaimPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type FinalizeDeviceClaimHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type FinalizeDeviceClaimRequestBody struct {
	Tags map[string]string `json:"tags"`
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
