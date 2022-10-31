package operations

import (
"openapi/pkg/models/shared")


type DeleteCapacityProviderXAmzTargetEnum string

const (
    DeleteCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteCapacityProvider DeleteCapacityProviderXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider"
)


type DeleteCapacityProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCapacityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCapacityProviderRequest struct {
    Headers DeleteCapacityProviderHeaders 
    Request shared.DeleteCapacityProviderRequest `request:"mediaType=application/json"`
    
}

type DeleteCapacityProviderResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteCapacityProviderResponse *shared.DeleteCapacityProviderResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

