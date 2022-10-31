package operations

import (
"openapi/pkg/models/shared")


type UpdateServiceXAmzTargetEnum string

const (
    UpdateServiceXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateService UpdateServiceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateService"
)


type UpdateServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateServiceRequest struct {
    Headers UpdateServiceHeaders 
    Request shared.UpdateServiceRequest `request:"mediaType=application/json"`
    
}

type UpdateServiceResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    PlatformTaskDefinitionIncompatibilityException *interface{} 
    PlatformUnknownException *interface{} 
    ServerException *interface{} 
    ServiceNotActiveException *interface{} 
    ServiceNotFoundException *interface{} 
    StatusCode int64 
    UpdateServiceResponse *shared.UpdateServiceResponse 
    
}

