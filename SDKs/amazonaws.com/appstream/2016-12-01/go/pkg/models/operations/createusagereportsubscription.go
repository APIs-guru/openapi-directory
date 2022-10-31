package operations

import (
"openapi/pkg/models/shared")


type CreateUsageReportSubscriptionXAmzTargetEnum string

const (
    CreateUsageReportSubscriptionXAmzTargetEnumPhotonAdminProxyServiceCreateUsageReportSubscription CreateUsageReportSubscriptionXAmzTargetEnum = "PhotonAdminProxyService.CreateUsageReportSubscription"
)


type CreateUsageReportSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateUsageReportSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateUsageReportSubscriptionRequest struct {
    Headers CreateUsageReportSubscriptionHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateUsageReportSubscriptionResponse struct {
    ContentType string 
    CreateUsageReportSubscriptionResult *shared.CreateUsageReportSubscriptionResult 
    InvalidAccountStatusException *interface{} 
    InvalidRoleException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

