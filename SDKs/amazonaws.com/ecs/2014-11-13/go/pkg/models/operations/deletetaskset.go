package operations

import (
"openapi/pkg/models/shared")


type DeleteTaskSetXAmzTargetEnum string

const (
    DeleteTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteTaskSet DeleteTaskSetXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet"
)


type DeleteTaskSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteTaskSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteTaskSetRequest struct {
    Headers DeleteTaskSetHeaders 
    Request shared.DeleteTaskSetRequest `request:"mediaType=application/json"`
    
}

type DeleteTaskSetResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    DeleteTaskSetResponse *shared.DeleteTaskSetResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    ServiceNotActiveException *interface{} 
    ServiceNotFoundException *interface{} 
    StatusCode int64 
    TaskSetNotFoundException *interface{} 
    UnsupportedFeatureException *interface{} 
    
}

