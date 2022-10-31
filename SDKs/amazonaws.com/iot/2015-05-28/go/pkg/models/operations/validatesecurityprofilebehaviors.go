package operations

import (
"openapi/pkg/models/shared")

type ValidateSecurityProfileBehaviorsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ValidateSecurityProfileBehaviorsRequestBody struct {
    Behaviors []shared.Behavior `json:"behaviors"`
    
}

type ValidateSecurityProfileBehaviorsRequest struct {
    Headers ValidateSecurityProfileBehaviorsHeaders 
    Request ValidateSecurityProfileBehaviorsRequestBody `request:"mediaType=application/json"`
    
}

type ValidateSecurityProfileBehaviorsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidateSecurityProfileBehaviorsResponse *shared.ValidateSecurityProfileBehaviorsResponse 
    
}

