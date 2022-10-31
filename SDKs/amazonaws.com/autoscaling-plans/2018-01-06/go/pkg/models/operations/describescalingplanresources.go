package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalingPlanResourcesXAmzTargetEnum string

const (
	DescribeScalingPlanResourcesXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources DescribeScalingPlanResourcesXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
)

type DescribeScalingPlanResourcesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalingPlanResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeScalingPlanResourcesRequest struct {
	Headers DescribeScalingPlanResourcesHeaders
	Request shared.DescribeScalingPlanResourcesRequest `request:"mediaType=application/json"`
}

type DescribeScalingPlanResourcesResponse struct {
	ConcurrentUpdateException            *interface{}
	ContentType                          string
	DescribeScalingPlanResourcesResponse *shared.DescribeScalingPlanResourcesResponse
	InternalServiceException             *interface{}
	InvalidNextTokenException            *interface{}
	StatusCode                           int64
	ValidationException                  *interface{}
}
