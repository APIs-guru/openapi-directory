package operations

import (
	"openapi/pkg/models/shared"
)

type GetPolicyVersionPathParams struct {
	PolicyName      string `pathParam:"style=simple,explode=false,name=policyName"`
	PolicyVersionID string `pathParam:"style=simple,explode=false,name=policyVersionId"`
}

type GetPolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPolicyVersionRequest struct {
	PathParams GetPolicyVersionPathParams
	Headers    GetPolicyVersionHeaders
}

type GetPolicyVersionResponse struct {
	ContentType                 string
	GetPolicyVersionResponse    *shared.GetPolicyVersionResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
