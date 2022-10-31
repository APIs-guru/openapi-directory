package operations

import (
"openapi/pkg/models/shared")


type DescribeAssessmentRunsXAmzTargetEnum string

const (
    DescribeAssessmentRunsXAmzTargetEnumInspectorServiceDescribeAssessmentRuns DescribeAssessmentRunsXAmzTargetEnum = "InspectorService.DescribeAssessmentRuns"
)


type DescribeAssessmentRunsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAssessmentRunsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAssessmentRunsRequest struct {
    Headers DescribeAssessmentRunsHeaders 
    Request shared.DescribeAssessmentRunsRequest `request:"mediaType=application/json"`
    
}

type DescribeAssessmentRunsResponse struct {
    ContentType string 
    DescribeAssessmentRunsResponse *shared.DescribeAssessmentRunsResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

