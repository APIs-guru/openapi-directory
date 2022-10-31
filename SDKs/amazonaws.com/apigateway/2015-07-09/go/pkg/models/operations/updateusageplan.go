package operations

import (
"openapi/pkg/models/shared")

type UpdateUsagePlanPathParams struct {
    UsageplanID string `pathParam:"style=simple,explode=false,name=usageplanId"`
    
}

type UpdateUsagePlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateUsagePlanRequestBody struct {
    PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
    
}

type UpdateUsagePlanRequest struct {
    PathParams UpdateUsagePlanPathParams 
    Headers UpdateUsagePlanHeaders 
    Request UpdateUsagePlanRequestBody `request:"mediaType=application/json"`
    
}

type UpdateUsagePlanResponse struct {
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

