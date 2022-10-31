package operations

import (
"openapi/pkg/models/shared")

type CreateBillingGroupPathParams struct {
    BillingGroupName string `pathParam:"style=simple,explode=false,name=billingGroupName"`
    
}

type CreateBillingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateBillingGroupRequestBodyBillingGroupProperties struct {
    BillingGroupDescription *string `json:"billingGroupDescription,omitempty"`
    
}

type CreateBillingGroupRequestBody struct {
    BillingGroupProperties *CreateBillingGroupRequestBodyBillingGroupProperties `json:"billingGroupProperties,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateBillingGroupRequest struct {
    PathParams CreateBillingGroupPathParams 
    Headers CreateBillingGroupHeaders 
    Request CreateBillingGroupRequestBody `request:"mediaType=application/json"`
    
}

type CreateBillingGroupResponse struct {
    ContentType string 
    CreateBillingGroupResponse *shared.CreateBillingGroupResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

