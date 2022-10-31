package operations

import (
"openapi/pkg/models/shared")


type ClassifyDocumentXAmzTargetEnum string

const (
    ClassifyDocumentXAmzTargetEnumComprehend20171127ClassifyDocument ClassifyDocumentXAmzTargetEnum = "Comprehend_20171127.ClassifyDocument"
)


type ClassifyDocumentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ClassifyDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ClassifyDocumentRequest struct {
    Headers ClassifyDocumentHeaders 
    Request shared.ClassifyDocumentRequest `request:"mediaType=application/json"`
    
}

type ClassifyDocumentResponse struct {
    ClassifyDocumentResponse *shared.ClassifyDocumentResponse 
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    TextSizeLimitExceededException *interface{} 
    
}

