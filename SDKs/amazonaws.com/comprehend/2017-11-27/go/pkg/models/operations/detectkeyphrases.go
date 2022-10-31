package operations

import (
"openapi/pkg/models/shared")


type DetectKeyPhrasesXAmzTargetEnum string

const (
    DetectKeyPhrasesXAmzTargetEnumComprehend20171127DetectKeyPhrases DetectKeyPhrasesXAmzTargetEnum = "Comprehend_20171127.DetectKeyPhrases"
)


type DetectKeyPhrasesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectKeyPhrasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectKeyPhrasesRequest struct {
    Headers DetectKeyPhrasesHeaders 
    Request shared.DetectKeyPhrasesRequest `request:"mediaType=application/json"`
    
}

type DetectKeyPhrasesResponse struct {
    ContentType string 
    DetectKeyPhrasesResponse *shared.DetectKeyPhrasesResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    TextSizeLimitExceededException *interface{} 
    UnsupportedLanguageException *interface{} 
    
}

