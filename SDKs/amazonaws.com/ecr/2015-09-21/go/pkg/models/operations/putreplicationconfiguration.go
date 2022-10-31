package operations

import (
"openapi/pkg/models/shared")


type PutReplicationConfigurationXAmzTargetEnum string

const (
    PutReplicationConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutReplicationConfiguration PutReplicationConfigurationXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration"
)


type PutReplicationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutReplicationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutReplicationConfigurationRequest struct {
    Headers PutReplicationConfigurationHeaders 
    Request shared.PutReplicationConfigurationRequest `request:"mediaType=application/json"`
    
}

type PutReplicationConfigurationResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    PutReplicationConfigurationResponse *shared.PutReplicationConfigurationResponse 
    ServerException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

