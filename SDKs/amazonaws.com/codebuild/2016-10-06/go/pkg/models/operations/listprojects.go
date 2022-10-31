package operations

import (
"openapi/pkg/models/shared")

type ListProjectsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListProjectsXAmzTargetEnum string

const (
    ListProjectsXAmzTargetEnumCodeBuild20161006ListProjects ListProjectsXAmzTargetEnum = "CodeBuild_20161006.ListProjects"
)


type ListProjectsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListProjectsRequest struct {
    QueryParams ListProjectsQueryParams 
    Headers ListProjectsHeaders 
    Request shared.ListProjectsInput `request:"mediaType=application/json"`
    
}

type ListProjectsResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ListProjectsOutput *shared.ListProjectsOutput 
    StatusCode int64 
    
}

