package operations

import (
"openapi/pkg/models/shared")

type DeleteNotificationRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteNotificationRuleRequestBody struct {
    Arn string `json:"Arn"`
    
}

type DeleteNotificationRuleRequest struct {
    Headers DeleteNotificationRuleHeaders 
    Request DeleteNotificationRuleRequestBody `request:"mediaType=application/json"`
    
}

type DeleteNotificationRuleResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteNotificationRuleResult *shared.DeleteNotificationRuleResult 
    LimitExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

