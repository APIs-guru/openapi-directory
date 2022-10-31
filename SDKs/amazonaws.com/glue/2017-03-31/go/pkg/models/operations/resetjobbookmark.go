package operations

import (
"openapi/pkg/models/shared")


type ResetJobBookmarkXAmzTargetEnum string

const (
    ResetJobBookmarkXAmzTargetEnumAwsGlueResetJobBookmark ResetJobBookmarkXAmzTargetEnum = "AWSGlue.ResetJobBookmark"
)


type ResetJobBookmarkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResetJobBookmarkXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResetJobBookmarkRequest struct {
    Headers ResetJobBookmarkHeaders 
    Request shared.ResetJobBookmarkRequest `request:"mediaType=application/json"`
    
}

type ResetJobBookmarkResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResetJobBookmarkResponse *shared.ResetJobBookmarkResponse 
    StatusCode int64 
    
}

