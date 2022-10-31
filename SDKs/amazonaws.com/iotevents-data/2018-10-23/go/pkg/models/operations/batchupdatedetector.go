package operations

import (
"openapi/pkg/models/shared")

type BatchUpdateDetectorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchUpdateDetectorRequestBody struct {
    Detectors []shared.UpdateDetectorRequest `json:"detectors"`
    
}

type BatchUpdateDetectorRequest struct {
    Headers BatchUpdateDetectorHeaders 
    Request BatchUpdateDetectorRequestBody `request:"mediaType=application/json"`
    
}

type BatchUpdateDetectorResponse struct {
    BatchUpdateDetectorResponse *shared.BatchUpdateDetectorResponse 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

