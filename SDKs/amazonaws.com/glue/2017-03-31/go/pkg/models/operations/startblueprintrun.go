package operations

import (
"openapi/pkg/models/shared")


type StartBlueprintRunXAmzTargetEnum string

const (
    StartBlueprintRunXAmzTargetEnumAwsGlueStartBlueprintRun StartBlueprintRunXAmzTargetEnum = "AWSGlue.StartBlueprintRun"
)


type StartBlueprintRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartBlueprintRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartBlueprintRunRequest struct {
    Headers StartBlueprintRunHeaders 
    Request shared.StartBlueprintRunRequest `request:"mediaType=application/json"`
    
}

type StartBlueprintRunResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    IllegalBlueprintStateException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StartBlueprintRunResponse *shared.StartBlueprintRunResponse 
    StatusCode int64 
    
}

