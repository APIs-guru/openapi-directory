package operations

import (
"openapi/pkg/models/shared")


type DeregisterTaskDefinitionXAmzTargetEnum string

const (
    DeregisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeregisterTaskDefinition DeregisterTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
)


type DeregisterTaskDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterTaskDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterTaskDefinitionRequest struct {
    Headers DeregisterTaskDefinitionHeaders 
    Request shared.DeregisterTaskDefinitionRequest `request:"mediaType=application/json"`
    
}

type DeregisterTaskDefinitionResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeregisterTaskDefinitionResponse *shared.DeregisterTaskDefinitionResponse 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

