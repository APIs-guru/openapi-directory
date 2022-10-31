package operations

import (
"openapi/pkg/models/shared")

type GetExclusionsPreviewQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetExclusionsPreviewXAmzTargetEnum string

const (
    GetExclusionsPreviewXAmzTargetEnumInspectorServiceGetExclusionsPreview GetExclusionsPreviewXAmzTargetEnum = "InspectorService.GetExclusionsPreview"
)


type GetExclusionsPreviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetExclusionsPreviewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetExclusionsPreviewRequest struct {
    QueryParams GetExclusionsPreviewQueryParams 
    Headers GetExclusionsPreviewHeaders 
    Request shared.GetExclusionsPreviewRequest `request:"mediaType=application/json"`
    
}

type GetExclusionsPreviewResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetExclusionsPreviewResponse *shared.GetExclusionsPreviewResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    NoSuchEntityException *interface{} 
    StatusCode int64 
    
}

