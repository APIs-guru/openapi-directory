package operations

import (
"openapi/pkg/models/shared")

type ListStoredQueriesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListStoredQueriesXAmzTargetEnum string

const (
    ListStoredQueriesXAmzTargetEnumStarlingDoveServiceListStoredQueries ListStoredQueriesXAmzTargetEnum = "StarlingDoveService.ListStoredQueries"
)


type ListStoredQueriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListStoredQueriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListStoredQueriesRequest struct {
    QueryParams ListStoredQueriesQueryParams 
    Headers ListStoredQueriesHeaders 
    Request shared.ListStoredQueriesRequest `request:"mediaType=application/json"`
    
}

type ListStoredQueriesResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListStoredQueriesResponse *shared.ListStoredQueriesResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

