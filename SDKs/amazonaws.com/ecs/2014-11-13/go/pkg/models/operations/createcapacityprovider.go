package operations

import (
"openapi/pkg/models/shared")


type CreateCapacityProviderXAmzTargetEnum string

const (
    CreateCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateCapacityProvider CreateCapacityProviderXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider"
)


type CreateCapacityProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateCapacityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateCapacityProviderRequest struct {
    Headers CreateCapacityProviderHeaders 
    Request shared.CreateCapacityProviderRequest `request:"mediaType=application/json"`
    
}

type CreateCapacityProviderResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateCapacityProviderResponse *shared.CreateCapacityProviderResponse 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UpdateInProgressException *interface{} 
    
}

