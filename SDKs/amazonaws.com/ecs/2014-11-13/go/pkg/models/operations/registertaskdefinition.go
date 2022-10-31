package operations

import (
"openapi/pkg/models/shared")


type RegisterTaskDefinitionXAmzTargetEnum string

const (
    RegisterTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113RegisterTaskDefinition RegisterTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
)


type RegisterTaskDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterTaskDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterTaskDefinitionRequest struct {
    Headers RegisterTaskDefinitionHeaders 
    Request shared.RegisterTaskDefinitionRequest `request:"mediaType=application/json"`
    
}

type RegisterTaskDefinitionResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    RegisterTaskDefinitionResponse *shared.RegisterTaskDefinitionResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

