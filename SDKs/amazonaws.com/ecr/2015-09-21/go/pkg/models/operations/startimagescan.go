package operations

import (
"openapi/pkg/models/shared")


type StartImageScanXAmzTargetEnum string

const (
    StartImageScanXAmzTargetEnumAmazonEc2ContainerRegistryV20150921StartImageScan StartImageScanXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.StartImageScan"
)


type StartImageScanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartImageScanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartImageScanRequest struct {
    Headers StartImageScanHeaders 
    Request shared.StartImageScanRequest `request:"mediaType=application/json"`
    
}

type StartImageScanResponse struct {
    ContentType string 
    ImageNotFoundException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StartImageScanResponse *shared.StartImageScanResponse 
    StatusCode int64 
    UnsupportedImageTypeException *interface{} 
    
}

