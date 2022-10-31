package operations

import (
"openapi/pkg/models/shared")

type ListReportGroupsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListReportGroupsXAmzTargetEnum string

const (
    ListReportGroupsXAmzTargetEnumCodeBuild20161006ListReportGroups ListReportGroupsXAmzTargetEnum = "CodeBuild_20161006.ListReportGroups"
)


type ListReportGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReportGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReportGroupsRequest struct {
    QueryParams ListReportGroupsQueryParams 
    Headers ListReportGroupsHeaders 
    Request shared.ListReportGroupsInput `request:"mediaType=application/json"`
    
}

type ListReportGroupsResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ListReportGroupsOutput *shared.ListReportGroupsOutput 
    StatusCode int64 
    
}

