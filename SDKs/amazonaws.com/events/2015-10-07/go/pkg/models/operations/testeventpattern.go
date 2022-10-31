package operations

import (
"openapi/pkg/models/shared")


type TestEventPatternXAmzTargetEnum string

const (
    TestEventPatternXAmzTargetEnumAwsEventsTestEventPattern TestEventPatternXAmzTargetEnum = "AWSEvents.TestEventPattern"
)


type TestEventPatternHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget TestEventPatternXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type TestEventPatternRequest struct {
    Headers TestEventPatternHeaders 
    Request shared.TestEventPatternRequest `request:"mediaType=application/json"`
    
}

type TestEventPatternResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidEventPatternException *interface{} 
    StatusCode int64 
    TestEventPatternResponse *shared.TestEventPatternResponse 
    
}

