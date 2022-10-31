package operations

import (
"openapi/pkg/models/shared")

type CreateUsagePlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateUsagePlanRequestBodyQuota struct {
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    Period *shared.QuotaPeriodTypeEnum `json:"period,omitempty"`
    
}

type CreateUsagePlanRequestBodyThrottle struct {
    BurstLimit *int64 `json:"burstLimit,omitempty"`
    RateLimit *float64 `json:"rateLimit,omitempty"`
    
}

type CreateUsagePlanRequestBody struct {
    APIStages []shared.APIStage `json:"apiStages,omitempty"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Quota *CreateUsagePlanRequestBodyQuota `json:"quota,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Throttle *CreateUsagePlanRequestBodyThrottle `json:"throttle,omitempty"`
    
}

type CreateUsagePlanRequest struct {
    Headers CreateUsagePlanHeaders 
    Request CreateUsagePlanRequestBody `request:"mediaType=application/json"`
    
}

type CreateUsagePlanResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UsagePlan *shared.UsagePlan 
    
}

