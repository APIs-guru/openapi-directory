package operations

import (
"openapi/pkg/models/shared")

type GetImagePipelineQueryParams struct {
    ImagePipelineArn string `queryParam:"style=form,explode=true,name=imagePipelineArn"`
    
}

type GetImagePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetImagePipelineRequest struct {
    QueryParams GetImagePipelineQueryParams 
    Headers GetImagePipelineHeaders 
    
}

type GetImagePipelineResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    GetImagePipelineResponse *shared.GetImagePipelineResponse 
    InvalidRequestException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

