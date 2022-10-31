package operations

import (
"openapi/pkg/models/shared")


type PutImageScanningConfigurationXAmzTargetEnum string

const (
    PutImageScanningConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImageScanningConfiguration PutImageScanningConfigurationXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration"
)


type PutImageScanningConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutImageScanningConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutImageScanningConfigurationRequest struct {
    Headers PutImageScanningConfigurationHeaders 
    Request shared.PutImageScanningConfigurationRequest `request:"mediaType=application/json"`
    
}

type PutImageScanningConfigurationResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    PutImageScanningConfigurationResponse *shared.PutImageScanningConfigurationResponse 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

