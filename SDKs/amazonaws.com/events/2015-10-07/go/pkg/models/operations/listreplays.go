package operations

import (
"openapi/pkg/models/shared")


type ListReplaysXAmzTargetEnum string

const (
    ListReplaysXAmzTargetEnumAwsEventsListReplays ListReplaysXAmzTargetEnum = "AWSEvents.ListReplays"
)


type ListReplaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReplaysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReplaysRequest struct {
    Headers ListReplaysHeaders 
    Request shared.ListReplaysRequest `request:"mediaType=application/json"`
    
}

type ListReplaysResponse struct {
    ContentType string 
    InternalException *interface{} 
    ListReplaysResponse *shared.ListReplaysResponse 
    StatusCode int64 
    
}

