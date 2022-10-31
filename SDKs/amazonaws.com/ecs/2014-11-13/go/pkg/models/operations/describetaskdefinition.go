package operations

import (
"openapi/pkg/models/shared")


type DescribeTaskDefinitionXAmzTargetEnum string

const (
    DescribeTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTaskDefinition DescribeTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition"
)


type DescribeTaskDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTaskDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTaskDefinitionRequest struct {
    Headers DescribeTaskDefinitionHeaders 
    Request shared.DescribeTaskDefinitionRequest `request:"mediaType=application/json"`
    
}

type DescribeTaskDefinitionResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeTaskDefinitionResponse *shared.DescribeTaskDefinitionResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

