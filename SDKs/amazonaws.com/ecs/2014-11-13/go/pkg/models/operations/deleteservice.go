package operations

import (
"openapi/pkg/models/shared")


type DeleteServiceXAmzTargetEnum string

const (
    DeleteServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteService DeleteServiceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteService"
)


type DeleteServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteServiceRequest struct {
    Headers DeleteServiceHeaders 
    Request shared.DeleteServiceRequest `request:"mediaType=application/json"`
    
}

type DeleteServiceResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    DeleteServiceResponse *shared.DeleteServiceResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    ServiceNotFoundException *interface{} 
    StatusCode int64 
    
}

