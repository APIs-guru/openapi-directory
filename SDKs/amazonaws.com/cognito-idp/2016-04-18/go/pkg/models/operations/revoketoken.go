package operations

import (
"openapi/pkg/models/shared")


type RevokeTokenXAmzTargetEnum string

const (
    RevokeTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceRevokeToken RevokeTokenXAmzTargetEnum = "AWSCognitoIdentityProviderService.RevokeToken"
)


type RevokeTokenHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RevokeTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RevokeTokenRequest struct {
    Headers RevokeTokenHeaders 
    Request shared.RevokeTokenRequest `request:"mediaType=application/json"`
    
}

type RevokeTokenResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    RevokeTokenResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UnsupportedOperationException *interface{} 
    UnsupportedTokenTypeException *interface{} 
    
}

