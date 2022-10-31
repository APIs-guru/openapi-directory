package operations

import (
"openapi/pkg/models/shared")


type StartMatchBackfillXAmzTargetEnum string

const (
    StartMatchBackfillXAmzTargetEnumGameLiftStartMatchBackfill StartMatchBackfillXAmzTargetEnum = "GameLift.StartMatchBackfill"
)


type StartMatchBackfillHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartMatchBackfillXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartMatchBackfillRequest struct {
    Headers StartMatchBackfillHeaders 
    Request shared.StartMatchBackfillInput `request:"mediaType=application/json"`
    
}

type StartMatchBackfillResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StartMatchBackfillOutput *shared.StartMatchBackfillOutput 
    StatusCode int64 
    UnsupportedRegionException *interface{} 
    
}

