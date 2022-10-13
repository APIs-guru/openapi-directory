package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBillingGroupPathParams struct {
	BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
}

type CreateBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBillingGroupRequestBodyBillingGroupProperties struct {
	BillingGroupDescription *string `json:"billingGroupDescription"`
}

type CreateBillingGroupRequestBody struct {
	BillingGroupProperties *CreateBillingGroupRequestBodyBillingGroupProperties `json:"billingGroupProperties"`
	Tags                   []shared.Tag                                         `json:"tags"`
}

type CreateBillingGroupRequest struct {
	PathParams CreateBillingGroupPathParams
	Headers    CreateBillingGroupHeaders
	Request    CreateBillingGroupRequestBody `request:"mediaType=application/json"`
}

type CreateBillingGroupResponse struct {
	ContentType                    string
	CreateBillingGroupResponse     *shared.CreateBillingGroupResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
