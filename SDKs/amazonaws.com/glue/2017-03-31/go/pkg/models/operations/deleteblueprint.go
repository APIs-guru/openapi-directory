package operations

import (
"openapi/pkg/models/shared")


type DeleteBlueprintXAmzTargetEnum string

const (
    DeleteBlueprintXAmzTargetEnumAwsGlueDeleteBlueprint DeleteBlueprintXAmzTargetEnum = "AWSGlue.DeleteBlueprint"
)


type DeleteBlueprintHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteBlueprintXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteBlueprintRequest struct {
    Headers DeleteBlueprintHeaders 
    Request shared.DeleteBlueprintRequest `request:"mediaType=application/json"`
    
}

type DeleteBlueprintResponse struct {
    ContentType string 
    DeleteBlueprintResponse *shared.DeleteBlueprintResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

