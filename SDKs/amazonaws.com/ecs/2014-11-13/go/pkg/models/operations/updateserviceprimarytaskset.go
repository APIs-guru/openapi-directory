package operations

import (
"openapi/pkg/models/shared")


type UpdateServicePrimaryTaskSetXAmzTargetEnum string

const (
    UpdateServicePrimaryTaskSetXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet UpdateServicePrimaryTaskSetXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
)


type UpdateServicePrimaryTaskSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateServicePrimaryTaskSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateServicePrimaryTaskSetRequest struct {
    Headers UpdateServicePrimaryTaskSetHeaders 
    Request shared.UpdateServicePrimaryTaskSetRequest `request:"mediaType=application/json"`
    
}

type UpdateServicePrimaryTaskSetResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    ServiceNotActiveException *interface{} 
    ServiceNotFoundException *interface{} 
    StatusCode int64 
    TaskSetNotFoundException *interface{} 
    UnsupportedFeatureException *interface{} 
    UpdateServicePrimaryTaskSetResponse *shared.UpdateServicePrimaryTaskSetResponse 
    
}

