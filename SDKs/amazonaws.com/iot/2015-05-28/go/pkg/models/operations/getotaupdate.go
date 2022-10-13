package operations

import (
	"openapi/pkg/models/shared"
)

type GetOtaUpdatePathParams struct {
	OtaUpdateID string `pathParam:"style=simple,explode=false,name=otaUpdateId"`
}

type GetOtaUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetOtaUpdateRequest struct {
	PathParams GetOtaUpdatePathParams
	Headers    GetOtaUpdateHeaders
}

type GetOtaUpdateResponse struct {
	ContentType                 string
	GetOtaUpdateResponse        *shared.GetOtaUpdateResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
