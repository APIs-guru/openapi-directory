package operations

import (
"openapi/pkg/models/shared")


type ListControlsControlTypeEnum string

const (
    ListControlsControlTypeEnumStandard ListControlsControlTypeEnum = "Standard"
ListControlsControlTypeEnumCustom ListControlsControlTypeEnum = "Custom"
)


type ListControlsQueryParams struct {
    ControlType ListControlsControlTypeEnum `queryParam:"style=form,explode=true,name=controlType"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListControlsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListControlsRequest struct {
    QueryParams ListControlsQueryParams 
    Headers ListControlsHeaders 
    
}

type ListControlsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListControlsResponse *shared.ListControlsResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

