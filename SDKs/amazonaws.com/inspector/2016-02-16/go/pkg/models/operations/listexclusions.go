package operations

import (
"openapi/pkg/models/shared")

type ListExclusionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListExclusionsXAmzTargetEnum string

const (
    ListExclusionsXAmzTargetEnumInspectorServiceListExclusions ListExclusionsXAmzTargetEnum = "InspectorService.ListExclusions"
)


type ListExclusionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListExclusionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListExclusionsRequest struct {
    QueryParams ListExclusionsQueryParams 
    Headers ListExclusionsHeaders 
    Request shared.ListExclusionsRequest `request:"mediaType=application/json"`
    
}

type ListExclusionsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    ListExclusionsResponse *shared.ListExclusionsResponse 
    NoSuchEntityException *interface{} 
    StatusCode int64 
    
}

