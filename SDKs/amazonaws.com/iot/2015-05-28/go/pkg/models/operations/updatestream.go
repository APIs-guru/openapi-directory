package operations

import (
"openapi/pkg/models/shared")

type UpdateStreamPathParams struct {
    StreamID string `pathParam:"style=simple,explode=false,name=streamId"`
    
}

type UpdateStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateStreamRequestBody struct {
    Description *string `json:"description,omitempty"`
    Files []shared.StreamFile `json:"files,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

type UpdateStreamRequest struct {
    PathParams UpdateStreamPathParams 
    Headers UpdateStreamHeaders 
    Request UpdateStreamRequestBody `request:"mediaType=application/json"`
    
}

type UpdateStreamResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    UpdateStreamResponse *shared.UpdateStreamResponse 
    
}

