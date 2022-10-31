package operations

import (
"openapi/pkg/models/shared")

type ListNotificationRulesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListNotificationRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListNotificationRulesRequestBody struct {
    Filters []shared.ListNotificationRulesFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListNotificationRulesRequest struct {
    QueryParams ListNotificationRulesQueryParams 
    Headers ListNotificationRulesHeaders 
    Request ListNotificationRulesRequestBody `request:"mediaType=application/json"`
    
}

type ListNotificationRulesResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListNotificationRulesResult *shared.ListNotificationRulesResult 
    StatusCode int64 
    ValidationException *interface{} 
    
}

