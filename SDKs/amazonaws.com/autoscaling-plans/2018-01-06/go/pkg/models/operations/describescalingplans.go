package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalingPlansXAmzTargetEnum string

const (
	DescribeScalingPlansXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDescribeScalingPlans DescribeScalingPlansXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"
)

type DescribeScalingPlansHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalingPlansXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeScalingPlansRequest struct {
	Headers DescribeScalingPlansHeaders
	Request shared.DescribeScalingPlansRequest `request:"mediaType=application/json"`
}

type DescribeScalingPlansResponse struct {
	ConcurrentUpdateException    *interface{}
	ContentType                  string
	DescribeScalingPlansResponse *shared.DescribeScalingPlansResponse
	InternalServiceException     *interface{}
	InvalidNextTokenException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
