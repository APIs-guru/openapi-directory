package operations

import (
"openapi/pkg/models/shared")

type CreatePolicyPathParams struct {
    PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
    
}

type CreatePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreatePolicyRequestBody struct {
    PolicyDocument string `json:"policyDocument"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreatePolicyRequest struct {
    PathParams CreatePolicyPathParams 
    Headers CreatePolicyHeaders 
    Request CreatePolicyRequestBody `request:"mediaType=application/json"`
    
}

type CreatePolicyResponse struct {
    ContentType string 
    CreatePolicyResponse *shared.CreatePolicyResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    MalformedPolicyException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

