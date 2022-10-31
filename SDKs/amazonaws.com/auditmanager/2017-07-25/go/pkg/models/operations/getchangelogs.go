package operations

import (
"openapi/pkg/models/shared")

type GetChangeLogsPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    
}

type GetChangeLogsQueryParams struct {
    ControlID *string `queryParam:"style=form,explode=true,name=controlId"`
    ControlSetID *string `queryParam:"style=form,explode=true,name=controlSetId"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetChangeLogsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetChangeLogsRequest struct {
    PathParams GetChangeLogsPathParams 
    QueryParams GetChangeLogsQueryParams 
    Headers GetChangeLogsHeaders 
    
}

type GetChangeLogsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetChangeLogsResponse *shared.GetChangeLogsResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

