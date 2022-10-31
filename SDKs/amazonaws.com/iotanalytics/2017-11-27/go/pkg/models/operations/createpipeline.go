package operations

import (
"openapi/pkg/models/shared")

type CreatePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreatePipelineRequestBody struct {
    PipelineActivities []shared.PipelineActivity `json:"pipelineActivities"`
    PipelineName string `json:"pipelineName"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreatePipelineRequest struct {
    Headers CreatePipelineHeaders 
    Request CreatePipelineRequestBody `request:"mediaType=application/json"`
    
}

type CreatePipelineResponse struct {
    ContentType string 
    CreatePipelineResponse *shared.CreatePipelineResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

