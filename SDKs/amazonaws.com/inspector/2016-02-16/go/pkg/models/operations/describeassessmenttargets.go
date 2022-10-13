package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAssessmentTargetsXAmzTargetEnum string

const (
	DescribeAssessmentTargetsXAmzTargetEnumInspectorServiceDescribeAssessmentTargets DescribeAssessmentTargetsXAmzTargetEnum = "InspectorService.DescribeAssessmentTargets"
)

type DescribeAssessmentTargetsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAssessmentTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAssessmentTargetsRequest struct {
	Headers DescribeAssessmentTargetsHeaders
	Request shared.DescribeAssessmentTargetsRequest `request:"mediaType=application/json"`
}

type DescribeAssessmentTargetsResponse struct {
	ContentType                       string
	DescribeAssessmentTargetsResponse *shared.DescribeAssessmentTargetsResponse
	InternalException                 *interface{}
	InvalidInputException             *interface{}
	StatusCode                        int64
}
