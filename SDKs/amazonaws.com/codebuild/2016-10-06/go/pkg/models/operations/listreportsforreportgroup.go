package operations

import (
"openapi/pkg/models/shared")

type ListReportsForReportGroupQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListReportsForReportGroupXAmzTargetEnum string

const (
    ListReportsForReportGroupXAmzTargetEnumCodeBuild20161006ListReportsForReportGroup ListReportsForReportGroupXAmzTargetEnum = "CodeBuild_20161006.ListReportsForReportGroup"
)


type ListReportsForReportGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReportsForReportGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReportsForReportGroupRequest struct {
    QueryParams ListReportsForReportGroupQueryParams 
    Headers ListReportsForReportGroupHeaders 
    Request shared.ListReportsForReportGroupInput `request:"mediaType=application/json"`
    
}

type ListReportsForReportGroupResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ListReportsForReportGroupOutput *shared.ListReportsForReportGroupOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

