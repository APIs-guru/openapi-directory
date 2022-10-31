package operations

import (
"openapi/pkg/models/shared")


type DeleteEntityRecognizerXAmzTargetEnum string

const (
    DeleteEntityRecognizerXAmzTargetEnumComprehend20171127DeleteEntityRecognizer DeleteEntityRecognizerXAmzTargetEnum = "Comprehend_20171127.DeleteEntityRecognizer"
)


type DeleteEntityRecognizerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteEntityRecognizerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteEntityRecognizerRequest struct {
    Headers DeleteEntityRecognizerHeaders 
    Request shared.DeleteEntityRecognizerRequest `request:"mediaType=application/json"`
    
}

type DeleteEntityRecognizerResponse struct {
    ContentType string 
    DeleteEntityRecognizerResponse map[string]interface{} 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

