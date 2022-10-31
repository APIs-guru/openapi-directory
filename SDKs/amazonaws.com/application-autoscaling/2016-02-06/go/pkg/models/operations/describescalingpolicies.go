package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalingPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeScalingPoliciesXAmzTargetEnum string

const (
	DescribeScalingPoliciesXAmzTargetEnumAnyScaleFrontendServiceDescribeScalingPolicies DescribeScalingPoliciesXAmzTargetEnum = "AnyScaleFrontendService.DescribeScalingPolicies"
)

type DescribeScalingPoliciesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalingPoliciesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeScalingPoliciesRequest struct {
	QueryParams DescribeScalingPoliciesQueryParams
	Headers     DescribeScalingPoliciesHeaders
	Request     shared.DescribeScalingPoliciesRequest `request:"mediaType=application/json"`
}

type DescribeScalingPoliciesResponse struct {
	ConcurrentUpdateException       *interface{}
	ContentType                     string
	DescribeScalingPoliciesResponse *shared.DescribeScalingPoliciesResponse
	FailedResourceAccessException   *interface{}
	InternalServiceException        *interface{}
	InvalidNextTokenException       *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
