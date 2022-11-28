package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBillingGroupPathParams struct {
	BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
}

type UpdateBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateBillingGroupRequestBodyBillingGroupProperties
// The properties of a billing group.
type UpdateBillingGroupRequestBodyBillingGroupProperties struct {
	BillingGroupDescription *string `json:"billingGroupDescription,omitempty"`
}

type UpdateBillingGroupRequestBody struct {
	BillingGroupProperties UpdateBillingGroupRequestBodyBillingGroupProperties `json:"billingGroupProperties"`
	ExpectedVersion        *int64                                              `json:"expectedVersion,omitempty"`
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
