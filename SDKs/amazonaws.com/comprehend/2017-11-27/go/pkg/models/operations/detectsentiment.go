package operations

import (
"openapi/pkg/models/shared")


type DetectSentimentXAmzTargetEnum string

const (
    DetectSentimentXAmzTargetEnumComprehend20171127DetectSentiment DetectSentimentXAmzTargetEnum = "Comprehend_20171127.DetectSentiment"
)


type DetectSentimentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectSentimentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectSentimentRequest struct {
    Headers DetectSentimentHeaders 
    Request shared.DetectSentimentRequest `request:"mediaType=application/json"`
    
}

type DetectSentimentResponse struct {
    ContentType string 
    DetectSentimentResponse *shared.DetectSentimentResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    TextSizeLimitExceededException *interface{} 
    UnsupportedLanguageException *interface{} 
    
}

