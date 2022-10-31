package operations

import (
"openapi/pkg/models/shared")


type UpdateClusterSettingsXAmzTargetEnum string

const (
    UpdateClusterSettingsXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateClusterSettings UpdateClusterSettingsXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings"
)


type UpdateClusterSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateClusterSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateClusterSettingsRequest struct {
    Headers UpdateClusterSettingsHeaders 
    Request shared.UpdateClusterSettingsRequest `request:"mediaType=application/json"`
    
}

type UpdateClusterSettingsResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UpdateClusterSettingsResponse *shared.UpdateClusterSettingsResponse 
    
}

