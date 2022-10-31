package operations

import (
"openapi/pkg/models/shared")


type UpdateCapacityProviderXAmzTargetEnum string

const (
    UpdateCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateCapacityProvider UpdateCapacityProviderXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider"
)


type UpdateCapacityProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateCapacityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateCapacityProviderRequest struct {
    Headers UpdateCapacityProviderHeaders 
    Request shared.UpdateCapacityProviderRequest `request:"mediaType=application/json"`
    
}

type UpdateCapacityProviderResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UpdateCapacityProviderResponse *shared.UpdateCapacityProviderResponse 
    
}

