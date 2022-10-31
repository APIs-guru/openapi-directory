package operations

import (
"openapi/pkg/models/shared")

type CreateSecurityProfilePathParams struct {
    SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
    
}

type CreateSecurityProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateSecurityProfileRequestBody struct {
    AdditionalMetricsToRetain []string `json:"additionalMetricsToRetain,omitempty"`
    AdditionalMetricsToRetainV2 []shared.MetricToRetain `json:"additionalMetricsToRetainV2,omitempty"`
    AlertTargets map[string]shared.AlertTarget `json:"alertTargets,omitempty"`
    Behaviors []shared.Behavior `json:"behaviors,omitempty"`
    SecurityProfileDescription *string `json:"securityProfileDescription,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateSecurityProfileRequest struct {
    PathParams CreateSecurityProfilePathParams 
    Headers CreateSecurityProfileHeaders 
    Request CreateSecurityProfileRequestBody `request:"mediaType=application/json"`
    
}

type CreateSecurityProfileResponse struct {
    ContentType string 
    CreateSecurityProfileResponse *shared.CreateSecurityProfileResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

