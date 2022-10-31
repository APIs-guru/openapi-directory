package operations

import (
"openapi/pkg/models/shared")


type CompleteLayerUploadXAmzTargetEnum string

const (
    CompleteLayerUploadXAmzTargetEnumAmazonEc2ContainerRegistryV20150921CompleteLayerUpload CompleteLayerUploadXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload"
)


type CompleteLayerUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CompleteLayerUploadXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CompleteLayerUploadRequest struct {
    Headers CompleteLayerUploadHeaders 
    Request shared.CompleteLayerUploadRequest `request:"mediaType=application/json"`
    
}

type CompleteLayerUploadResponse struct {
    CompleteLayerUploadResponse *shared.CompleteLayerUploadResponse 
    ContentType string 
    EmptyUploadException *interface{} 
    InvalidLayerException *interface{} 
    InvalidParameterException *interface{} 
    KmsException *interface{} 
    LayerAlreadyExistsException *interface{} 
    LayerPartTooSmallException *interface{} 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UploadNotFoundException *interface{} 
    
}

