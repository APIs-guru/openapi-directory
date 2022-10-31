package operations

import (
"openapi/pkg/models/shared")

type DescribeObjectsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    
}


type DescribeObjectsXAmzTargetEnum string

const (
    DescribeObjectsXAmzTargetEnumDataPipelineDescribeObjects DescribeObjectsXAmzTargetEnum = "DataPipeline.DescribeObjects"
)


type DescribeObjectsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeObjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeObjectsRequest struct {
    QueryParams DescribeObjectsQueryParams 
    Headers DescribeObjectsHeaders 
    Request shared.DescribeObjectsInput `request:"mediaType=application/json"`
    
}

type DescribeObjectsResponse struct {
    ContentType string 
    DescribeObjectsOutput *shared.DescribeObjectsOutput 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    PipelineDeletedException *interface{} 
    PipelineNotFoundException *interface{} 
    StatusCode int64 
    
}

