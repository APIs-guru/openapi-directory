package operations

import (
"openapi/pkg/models/shared")

type ListImagePipelineImagesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListImagePipelineImagesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListImagePipelineImagesRequestBody struct {
    Filters []shared.Filter `json:"filters,omitempty"`
    ImagePipelineArn string `json:"imagePipelineArn"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListImagePipelineImagesRequest struct {
    QueryParams ListImagePipelineImagesQueryParams 
    Headers ListImagePipelineImagesHeaders 
    Request ListImagePipelineImagesRequestBody `request:"mediaType=application/json"`
    
}

type ListImagePipelineImagesResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidRequestException *interface{} 
    ListImagePipelineImagesResponse *shared.ListImagePipelineImagesResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

