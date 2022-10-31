package operations

import (
"openapi/pkg/models/shared")

type ListSharedProjectsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListSharedProjectsXAmzTargetEnum string

const (
    ListSharedProjectsXAmzTargetEnumCodeBuild20161006ListSharedProjects ListSharedProjectsXAmzTargetEnum = "CodeBuild_20161006.ListSharedProjects"
)


type ListSharedProjectsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListSharedProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListSharedProjectsRequest struct {
    QueryParams ListSharedProjectsQueryParams 
    Headers ListSharedProjectsHeaders 
    Request shared.ListSharedProjectsInput `request:"mediaType=application/json"`
    
}

type ListSharedProjectsResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ListSharedProjectsOutput *shared.ListSharedProjectsOutput 
    StatusCode int64 
    
}

