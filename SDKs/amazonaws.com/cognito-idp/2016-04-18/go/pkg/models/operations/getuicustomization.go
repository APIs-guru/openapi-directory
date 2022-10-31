package operations

import (
"openapi/pkg/models/shared")


type GetUICustomizationXAmzTargetEnum string

const (
    GetUICustomizationXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUICustomization GetUICustomizationXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetUICustomization"
)


type GetUICustomizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetUICustomizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetUICustomizationRequest struct {
    Headers GetUICustomizationHeaders 
    Request shared.GetUICustomizationRequest `request:"mediaType=application/json"`
    
}

type GetUICustomizationResponse struct {
    ContentType string 
    GetUICustomizationResponse *shared.GetUICustomizationResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

