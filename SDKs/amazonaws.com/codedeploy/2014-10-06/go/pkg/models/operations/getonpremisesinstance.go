package operations

import (
"openapi/pkg/models/shared")


type GetOnPremisesInstanceXAmzTargetEnum string

const (
    GetOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006GetOnPremisesInstance GetOnPremisesInstanceXAmzTargetEnum = "CodeDeploy_20141006.GetOnPremisesInstance"
)


type GetOnPremisesInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetOnPremisesInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetOnPremisesInstanceRequest struct {
    Headers GetOnPremisesInstanceHeaders 
    Request shared.GetOnPremisesInstanceInput `request:"mediaType=application/json"`
    
}

type GetOnPremisesInstanceResponse struct {
    ContentType string 
    GetOnPremisesInstanceOutput *shared.GetOnPremisesInstanceOutput 
    InstanceNameRequiredException *interface{} 
    InstanceNotRegisteredException *interface{} 
    InvalidInstanceNameException *interface{} 
    StatusCode int64 
    
}

