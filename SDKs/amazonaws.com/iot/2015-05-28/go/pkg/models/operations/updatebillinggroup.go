package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBillingGroupPathParams struct {
	BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
}

type UpdateBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBillingGroupRequestBodyBillingGroupProperties struct {
	BillingGroupDescription *string `json:"billingGroupDescription"`
}

type UpdateBillingGroupRequestBody struct {
	BillingGroupProperties UpdateBillingGroupRequestBodyBillingGroupProperties `json:"billingGroupProperties"`
	ExpectedVersion        *int64                                              `json:"expectedVersion"`
}

type UpdateBillingGroupRequest struct {
	PathParams UpdateBillingGroupPathParams
	Headers    UpdateBillingGroupHeaders
	Request    UpdateBillingGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateBillingGroupResponse struct {
	ContentType                string
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateBillingGroupResponse *shared.UpdateBillingGroupResponse
	VersionConflictException   *interface{}
}
