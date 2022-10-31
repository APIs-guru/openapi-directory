package operations

import (
"openapi/pkg/models/shared")


type StopUserImportJobXAmzTargetEnum string

const (
    StopUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceStopUserImportJob StopUserImportJobXAmzTargetEnum = "AWSCognitoIdentityProviderService.StopUserImportJob"
)


type StopUserImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopUserImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopUserImportJobRequest struct {
    Headers StopUserImportJobHeaders 
    Request shared.StopUserImportJobRequest `request:"mediaType=application/json"`
    
}

type StopUserImportJobResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    PreconditionNotMetException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopUserImportJobResponse *shared.StopUserImportJobResponse 
    TooManyRequestsException *interface{} 
    
}

