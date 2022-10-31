package operations

import (
"openapi/pkg/models/shared")

type BatchPutMessageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchPutMessageRequestBody struct {
    ChannelName string `json:"channelName"`
    Messages []shared.Message `json:"messages"`
    
}

type BatchPutMessageRequest struct {
    Headers BatchPutMessageHeaders 
    Request BatchPutMessageRequestBody `request:"mediaType=application/json"`
    
}

type BatchPutMessageResponse struct {
    BatchPutMessageResponse *shared.BatchPutMessageResponse 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

