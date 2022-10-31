package operations

import (
"openapi/pkg/models/shared")


type DeregisterContainerInstanceXAmzTargetEnum string

const (
    DeregisterContainerInstanceXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeregisterContainerInstance DeregisterContainerInstanceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance"
)


type DeregisterContainerInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterContainerInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterContainerInstanceRequest struct {
    Headers DeregisterContainerInstanceHeaders 
    Request shared.DeregisterContainerInstanceRequest `request:"mediaType=application/json"`
    
}

type DeregisterContainerInstanceResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    DeregisterContainerInstanceResponse *shared.DeregisterContainerInstanceResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

