package operations

import (
"openapi/pkg/models/shared")


type DescribeAssessmentTemplatesXAmzTargetEnum string

const (
    DescribeAssessmentTemplatesXAmzTargetEnumInspectorServiceDescribeAssessmentTemplates DescribeAssessmentTemplatesXAmzTargetEnum = "InspectorService.DescribeAssessmentTemplates"
)


type DescribeAssessmentTemplatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAssessmentTemplatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAssessmentTemplatesRequest struct {
    Headers DescribeAssessmentTemplatesHeaders 
    Request shared.DescribeAssessmentTemplatesRequest `request:"mediaType=application/json"`
    
}

type DescribeAssessmentTemplatesResponse struct {
    ContentType string 
    DescribeAssessmentTemplatesResponse *shared.DescribeAssessmentTemplatesResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

