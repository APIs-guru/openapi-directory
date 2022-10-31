package operations

import (
"openapi/pkg/models/shared")


type DescribeContainerInstancesXAmzTargetEnum string

const (
    DescribeContainerInstancesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeContainerInstances DescribeContainerInstancesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances"
)


type DescribeContainerInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeContainerInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeContainerInstancesRequest struct {
    Headers DescribeContainerInstancesHeaders 
    Request shared.DescribeContainerInstancesRequest `request:"mediaType=application/json"`
    
}

type DescribeContainerInstancesResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    DescribeContainerInstancesResponse *shared.DescribeContainerInstancesResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

