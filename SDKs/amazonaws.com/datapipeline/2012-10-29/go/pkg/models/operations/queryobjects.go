package operations

import (
"openapi/pkg/models/shared")

type QueryObjectsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    
}


type QueryObjectsXAmzTargetEnum string

const (
    QueryObjectsXAmzTargetEnumDataPipelineQueryObjects QueryObjectsXAmzTargetEnum = "DataPipeline.QueryObjects"
)


type QueryObjectsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget QueryObjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type QueryObjectsRequest struct {
    QueryParams QueryObjectsQueryParams 
    Headers QueryObjectsHeaders 
    Request shared.QueryObjectsInput `request:"mediaType=application/json"`
    
}

type QueryObjectsResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    PipelineDeletedException *interface{} 
    PipelineNotFoundException *interface{} 
    QueryObjectsOutput *shared.QueryObjectsOutput 
    StatusCode int64 
    
}

