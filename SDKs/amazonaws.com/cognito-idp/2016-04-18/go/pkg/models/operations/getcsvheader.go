package operations

import (
"openapi/pkg/models/shared")


type GetCsvHeaderXAmzTargetEnum string

const (
    GetCsvHeaderXAmzTargetEnumAwsCognitoIdentityProviderServiceGetCsvHeader GetCsvHeaderXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetCSVHeader"
)


type GetCsvHeaderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCsvHeaderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCsvHeaderRequest struct {
    Headers GetCsvHeaderHeaders 
    Request shared.GetCsvHeaderRequest `request:"mediaType=application/json"`
    
}

type GetCsvHeaderResponse struct {
    ContentType string 
    GetCsvHeaderResponse *shared.GetCsvHeaderResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

