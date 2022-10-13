package operations

import (
	"openapi/pkg/models/shared"
)

type ClaimDevicesByClaimCodePathParams struct {
	ClaimCode string `pathParam:"style=simple,explode=false,name=claimCode"`
}

type ClaimDevicesByClaimCodeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ClaimDevicesByClaimCodeRequest struct {
	PathParams ClaimDevicesByClaimCodePathParams
	Headers    ClaimDevicesByClaimCodeHeaders
}

type ClaimDevicesByClaimCodeResponse struct {
	ClaimDevicesByClaimCodeResponse *shared.ClaimDevicesByClaimCodeResponse
	ContentType                     string
	ForbiddenException              *interface{}
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
}
