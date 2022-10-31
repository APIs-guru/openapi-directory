package operations

import (
"openapi/pkg/models/shared")


type DescribeTasksXAmzTargetEnum string

const (
    DescribeTasksXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTasks DescribeTasksXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeTasks"
)


type DescribeTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTasksRequest struct {
    Headers DescribeTasksHeaders 
    Request shared.DescribeTasksRequest `request:"mediaType=application/json"`
    
}

type DescribeTasksResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    DescribeTasksResponse *shared.DescribeTasksResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

