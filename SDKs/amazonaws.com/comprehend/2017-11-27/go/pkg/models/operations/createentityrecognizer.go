package operations

import (
"openapi/pkg/models/shared")


type CreateEntityRecognizerXAmzTargetEnum string

const (
    CreateEntityRecognizerXAmzTargetEnumComprehend20171127CreateEntityRecognizer CreateEntityRecognizerXAmzTargetEnum = "Comprehend_20171127.CreateEntityRecognizer"
)


type CreateEntityRecognizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateEntityRecognizerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateEntityRecognizerRequest struct {
    Headers CreateEntityRecognizerHeaders 
    Request shared.CreateEntityRecognizerRequest `request:"mediaType=application/json"`
    
}

type CreateEntityRecognizerResponse struct {
    ContentType string 
    CreateEntityRecognizerResponse *shared.CreateEntityRecognizerResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    KmsKeyValidationException *interface{} 
    ResourceInUseException *interface{} 
    ResourceLimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    TooManyTagsException *interface{} 
    UnsupportedLanguageException *interface{} 
    
}

