package operations

import (
"openapi/pkg/models/shared")


type CreateUserImportJobXAmzTargetEnum string

const (
    CreateUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserImportJob CreateUserImportJobXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateUserImportJob"
)


type CreateUserImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateUserImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateUserImportJobRequest struct {
    Headers CreateUserImportJobHeaders 
    Request shared.CreateUserImportJobRequest `request:"mediaType=application/json"`
    
}

type CreateUserImportJobResponse struct {
    ContentType string 
    CreateUserImportJobResponse *shared.CreateUserImportJobResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    NotAuthorizedException *interface{} 
    PreconditionNotMetException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

