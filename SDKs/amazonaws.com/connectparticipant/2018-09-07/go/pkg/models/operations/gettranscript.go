package operations

import (
"openapi/pkg/models/shared")

type GetTranscriptQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetTranscriptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzBearer string `header:"style=simple,explode=false,name=X-Amz-Bearer"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type GetTranscriptRequestBodyScanDirectionEnum string

const (
    GetTranscriptRequestBodyScanDirectionEnumForward GetTranscriptRequestBodyScanDirectionEnum = "FORWARD"
GetTranscriptRequestBodyScanDirectionEnumBackward GetTranscriptRequestBodyScanDirectionEnum = "BACKWARD"
)



type GetTranscriptRequestBodySortOrderEnum string

const (
    GetTranscriptRequestBodySortOrderEnumDescending GetTranscriptRequestBodySortOrderEnum = "DESCENDING"
GetTranscriptRequestBodySortOrderEnumAscending GetTranscriptRequestBodySortOrderEnum = "ASCENDING"
)


type GetTranscriptRequestBodyStartPosition struct {
    AbsoluteTime *string `json:"AbsoluteTime,omitempty"`
    ID *string `json:"Id,omitempty"`
    MostRecent *int64 `json:"MostRecent,omitempty"`
    
}

type GetTranscriptRequestBody struct {
    ContactID *string `json:"ContactId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ScanDirection *GetTranscriptRequestBodyScanDirectionEnum `json:"ScanDirection,omitempty"`
    SortOrder *GetTranscriptRequestBodySortOrderEnum `json:"SortOrder,omitempty"`
    StartPosition *GetTranscriptRequestBodyStartPosition `json:"StartPosition,omitempty"`
    
}

type GetTranscriptRequest struct {
    QueryParams GetTranscriptQueryParams 
    Headers GetTranscriptHeaders 
    Request GetTranscriptRequestBody `request:"mediaType=application/json"`
    
}

type GetTranscriptResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetTranscriptResponse *shared.GetTranscriptResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

