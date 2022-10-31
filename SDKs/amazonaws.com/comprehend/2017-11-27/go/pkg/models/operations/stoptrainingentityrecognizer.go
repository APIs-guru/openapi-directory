package operations

import (
"openapi/pkg/models/shared")


type StopTrainingEntityRecognizerXAmzTargetEnum string

const (
    StopTrainingEntityRecognizerXAmzTargetEnumComprehend20171127StopTrainingEntityRecognizer StopTrainingEntityRecognizerXAmzTargetEnum = "Comprehend_20171127.StopTrainingEntityRecognizer"
)


type StopTrainingEntityRecognizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopTrainingEntityRecognizerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopTrainingEntityRecognizerRequest struct {
    Headers StopTrainingEntityRecognizerHeaders 
    Request shared.StopTrainingEntityRecognizerRequest `request:"mediaType=application/json"`
    
}

type StopTrainingEntityRecognizerResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopTrainingEntityRecognizerResponse map[string]interface{} 
    TooManyRequestsException *interface{} 
    
}

