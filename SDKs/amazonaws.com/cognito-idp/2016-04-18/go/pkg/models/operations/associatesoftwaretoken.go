package operations

import (
"openapi/pkg/models/shared")


type AssociateSoftwareTokenXAmzTargetEnum string

const (
    AssociateSoftwareTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceAssociateSoftwareToken AssociateSoftwareTokenXAmzTargetEnum = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"
)


type AssociateSoftwareTokenHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateSoftwareTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateSoftwareTokenRequest struct {
    Headers AssociateSoftwareTokenHeaders 
    Request shared.AssociateSoftwareTokenRequest `request:"mediaType=application/json"`
    
}

type AssociateSoftwareTokenResponse struct {
    AssociateSoftwareTokenResponse *shared.AssociateSoftwareTokenResponse 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    SoftwareTokenMfaNotFoundException *interface{} 
    StatusCode int64 
    
}

