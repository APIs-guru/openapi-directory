package operations

import (
"openapi/pkg/models/shared")


type StartDocumentClassificationJobXAmzTargetEnum string

const (
    StartDocumentClassificationJobXAmzTargetEnumComprehend20171127StartDocumentClassificationJob StartDocumentClassificationJobXAmzTargetEnum = "Comprehend_20171127.StartDocumentClassificationJob"
)


type StartDocumentClassificationJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartDocumentClassificationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartDocumentClassificationJobRequest struct {
    Headers StartDocumentClassificationJobHeaders 
    Request shared.StartDocumentClassificationJobRequest `request:"mediaType=application/json"`
    
}

type StartDocumentClassificationJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    KmsKeyValidationException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StartDocumentClassificationJobResponse *shared.StartDocumentClassificationJobResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    TooManyTagsException *interface{} 
    
}

