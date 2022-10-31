package operations

import (
"openapi/pkg/models/shared")


type PutImageTagMutabilityXAmzTargetEnum string

const (
    PutImageTagMutabilityXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImageTagMutability PutImageTagMutabilityXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability"
)


type PutImageTagMutabilityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutImageTagMutabilityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutImageTagMutabilityRequest struct {
    Headers PutImageTagMutabilityHeaders 
    Request shared.PutImageTagMutabilityRequest `request:"mediaType=application/json"`
    
}

type PutImageTagMutabilityResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    PutImageTagMutabilityResponse *shared.PutImageTagMutabilityResponse 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

