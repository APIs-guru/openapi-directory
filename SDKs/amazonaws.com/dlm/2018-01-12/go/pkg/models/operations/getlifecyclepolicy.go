package operations

import (
	"openapi/pkg/models/shared"
)

type GetLifecyclePolicyPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policyId"`
}

type GetLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
