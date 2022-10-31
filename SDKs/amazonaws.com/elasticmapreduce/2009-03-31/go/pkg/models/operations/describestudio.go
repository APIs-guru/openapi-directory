package operations

import (
"openapi/pkg/models/shared")


type DescribeStudioXAmzTargetEnum string

const (
    DescribeStudioXAmzTargetEnumElasticMapReduceDescribeStudio DescribeStudioXAmzTargetEnum = "ElasticMapReduce.DescribeStudio"
)


type DescribeStudioHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStudioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStudioRequest struct {
    Headers DescribeStudioHeaders 
    Request shared.DescribeStudioInput `request:"mediaType=application/json"`
    
}

type DescribeStudioResponse struct {
    ContentType string 
    DescribeStudioOutput *shared.DescribeStudioOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

