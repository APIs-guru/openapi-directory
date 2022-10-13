package operations

import (
	"openapi/pkg/models/shared"
)

type GetLifecyclePolicyPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policyId"`
}

type GetLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLifecyclePolicyRequest struct {
	PathParams GetLifecyclePolicyPathParams
	Headers    GetLifecyclePolicyHeaders
}

type GetLifecyclePolicyResponse struct {
	ContentType                string
	GetLifecyclePolicyResponse *shared.GetLifecyclePolicyResponse
	InternalServerException    *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
