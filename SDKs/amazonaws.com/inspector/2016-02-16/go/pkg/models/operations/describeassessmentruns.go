package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAssessmentRunsXAmzTargetEnum string

const (
	DescribeAssessmentRunsXAmzTargetEnumInspectorServiceDescribeAssessmentRuns DescribeAssessmentRunsXAmzTargetEnum = "InspectorService.DescribeAssessmentRuns"
)

type DescribeAssessmentRunsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAssessmentRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAssessmentRunsRequest struct {
	Headers DescribeAssessmentRunsHeaders
	Request shared.DescribeAssessmentRunsRequest `request:"mediaType=application/json"`
}

type DescribeAssessmentRunsResponse struct {
	ContentType                    string
	DescribeAssessmentRunsResponse *shared.DescribeAssessmentRunsResponse
	InternalException              *interface{}
	InvalidInputException          *interface{}
	StatusCode                     int64
}
