package operations

import (
"openapi/pkg/models/shared")


type DeregisterOnPremisesInstanceXAmzTargetEnum string

const (
    DeregisterOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006DeregisterOnPremisesInstance DeregisterOnPremisesInstanceXAmzTargetEnum = "CodeDeploy_20141006.DeregisterOnPremisesInstance"
)


type DeregisterOnPremisesInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterOnPremisesInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterOnPremisesInstanceRequest struct {
    Headers DeregisterOnPremisesInstanceHeaders 
    Request shared.DeregisterOnPremisesInstanceInput `request:"mediaType=application/json"`
    
}

type DeregisterOnPremisesInstanceResponse struct {
    ContentType string 
    InstanceNameRequiredException *interface{} 
    InvalidInstanceNameException *interface{} 
    StatusCode int64 
    
}

