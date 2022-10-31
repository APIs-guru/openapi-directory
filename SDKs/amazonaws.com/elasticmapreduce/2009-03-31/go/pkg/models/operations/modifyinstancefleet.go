package operations

import (
"openapi/pkg/models/shared")


type ModifyInstanceFleetXAmzTargetEnum string

const (
    ModifyInstanceFleetXAmzTargetEnumElasticMapReduceModifyInstanceFleet ModifyInstanceFleetXAmzTargetEnum = "ElasticMapReduce.ModifyInstanceFleet"
)


type ModifyInstanceFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ModifyInstanceFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ModifyInstanceFleetRequest struct {
    Headers ModifyInstanceFleetHeaders 
    Request shared.ModifyInstanceFleetInput `request:"mediaType=application/json"`
    
}

type ModifyInstanceFleetResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

