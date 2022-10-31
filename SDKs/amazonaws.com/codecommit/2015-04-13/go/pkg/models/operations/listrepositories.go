package operations

import (
"openapi/pkg/models/shared")

type ListRepositoriesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListRepositoriesXAmzTargetEnum string

const (
    ListRepositoriesXAmzTargetEnumCodeCommit20150413ListRepositories ListRepositoriesXAmzTargetEnum = "CodeCommit_20150413.ListRepositories"
)


type ListRepositoriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListRepositoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListRepositoriesRequest struct {
    QueryParams ListRepositoriesQueryParams 
    Headers ListRepositoriesHeaders 
    Request shared.ListRepositoriesInput `request:"mediaType=application/json"`
    
}

type ListRepositoriesResponse struct {
    ContentType string 
    InvalidContinuationTokenException *interface{} 
    InvalidOrderException *interface{} 
    InvalidSortByException *interface{} 
    ListRepositoriesOutput *shared.ListRepositoriesOutput 
    StatusCode int64 
    
}

