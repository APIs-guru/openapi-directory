package operations

import (
"openapi/pkg/models/shared")


type GetSettingsAttributeEnum string

const (
    GetSettingsAttributeEnumAll GetSettingsAttributeEnum = "ALL"
GetSettingsAttributeEnumIsAwsOrgEnabled GetSettingsAttributeEnum = "IS_AWS_ORG_ENABLED"
GetSettingsAttributeEnumSnsTopic GetSettingsAttributeEnum = "SNS_TOPIC"
GetSettingsAttributeEnumDefaultAssessmentReportsDestination GetSettingsAttributeEnum = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
GetSettingsAttributeEnumDefaultProcessOwners GetSettingsAttributeEnum = "DEFAULT_PROCESS_OWNERS"
)


type GetSettingsPathParams struct {
    Attribute GetSettingsAttributeEnum `pathParam:"style=simple,explode=false,name=attribute"`
    
}

type GetSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSettingsRequest struct {
    PathParams GetSettingsPathParams 
    Headers GetSettingsHeaders 
    
}

type GetSettingsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetSettingsResponse *shared.GetSettingsResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    
}

