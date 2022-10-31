package operations

import (
"openapi/pkg/models/shared")

type GetBlueprintRunsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetBlueprintRunsXAmzTargetEnum string

const (
    GetBlueprintRunsXAmzTargetEnumAwsGlueGetBlueprintRuns GetBlueprintRunsXAmzTargetEnum = "AWSGlue.GetBlueprintRuns"
)


type GetBlueprintRunsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetBlueprintRunsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetBlueprintRunsRequest struct {
    QueryParams GetBlueprintRunsQueryParams 
    Headers GetBlueprintRunsHeaders 
    Request shared.GetBlueprintRunsRequest `request:"mediaType=application/json"`
    
}

type GetBlueprintRunsResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetBlueprintRunsResponse *shared.GetBlueprintRunsResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

