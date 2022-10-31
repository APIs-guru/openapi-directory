package operations

import (
"openapi/pkg/models/shared")


type DescribeAssessmentTargetsXAmzTargetEnum string

const (
    DescribeAssessmentTargetsXAmzTargetEnumInspectorServiceDescribeAssessmentTargets DescribeAssessmentTargetsXAmzTargetEnum = "InspectorService.DescribeAssessmentTargets"
)


type DescribeAssessmentTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAssessmentTargetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAssessmentTargetsRequest struct {
    Headers DescribeAssessmentTargetsHeaders 
    Request shared.DescribeAssessmentTargetsRequest `request:"mediaType=application/json"`
    
}

type DescribeAssessmentTargetsResponse struct {
    ContentType string 
    DescribeAssessmentTargetsResponse *shared.DescribeAssessmentTargetsResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

