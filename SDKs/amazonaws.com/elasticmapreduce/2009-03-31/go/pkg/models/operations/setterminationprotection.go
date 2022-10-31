package operations

import (
"openapi/pkg/models/shared")


type SetTerminationProtectionXAmzTargetEnum string

const (
    SetTerminationProtectionXAmzTargetEnumElasticMapReduceSetTerminationProtection SetTerminationProtectionXAmzTargetEnum = "ElasticMapReduce.SetTerminationProtection"
)


type SetTerminationProtectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetTerminationProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetTerminationProtectionRequest struct {
    Headers SetTerminationProtectionHeaders 
    Request shared.SetTerminationProtectionInput `request:"mediaType=application/json"`
    
}

type SetTerminationProtectionResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

