package operations

import (
"openapi/pkg/models/shared")

type DescribeApplicableIndividualAssessmentsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeApplicableIndividualAssessmentsXAmzTargetEnum string

const (
    DescribeApplicableIndividualAssessmentsXAmzTargetEnumAmazonDmSv20160101DescribeApplicableIndividualAssessments DescribeApplicableIndividualAssessmentsXAmzTargetEnum = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
)


type DescribeApplicableIndividualAssessmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeApplicableIndividualAssessmentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeApplicableIndividualAssessmentsRequest struct {
    QueryParams DescribeApplicableIndividualAssessmentsQueryParams 
    Headers DescribeApplicableIndividualAssessmentsHeaders 
    Request shared.DescribeApplicableIndividualAssessmentsMessage `request:"mediaType=application/json"`
    
}

type DescribeApplicableIndividualAssessmentsResponse struct {
    AccessDeniedFault *interface{} 
    ContentType string 
    DescribeApplicableIndividualAssessmentsResponse *shared.DescribeApplicableIndividualAssessmentsResponse 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

