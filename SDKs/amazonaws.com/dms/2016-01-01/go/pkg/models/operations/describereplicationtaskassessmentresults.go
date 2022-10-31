package operations

import (
"openapi/pkg/models/shared")

type DescribeReplicationTaskAssessmentResultsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeReplicationTaskAssessmentResultsXAmzTargetEnum string

const (
    DescribeReplicationTaskAssessmentResultsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskAssessmentResults DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"
)


type DescribeReplicationTaskAssessmentResultsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeReplicationTaskAssessmentResultsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeReplicationTaskAssessmentResultsRequest struct {
    QueryParams DescribeReplicationTaskAssessmentResultsQueryParams 
    Headers DescribeReplicationTaskAssessmentResultsHeaders 
    Request shared.DescribeReplicationTaskAssessmentResultsMessage `request:"mediaType=application/json"`
    
}

type DescribeReplicationTaskAssessmentResultsResponse struct {
    ContentType string 
    DescribeReplicationTaskAssessmentResultsResponse *shared.DescribeReplicationTaskAssessmentResultsResponse 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

