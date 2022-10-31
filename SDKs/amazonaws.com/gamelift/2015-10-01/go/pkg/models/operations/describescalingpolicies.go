package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalingPoliciesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeScalingPoliciesXAmzTargetEnum string

const (
	DescribeScalingPoliciesXAmzTargetEnumGameLiftDescribeScalingPolicies DescribeScalingPoliciesXAmzTargetEnum = "GameLift.DescribeScalingPolicies"
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
	Request     shared.DescribeScalingPoliciesInput `request:"mediaType=application/json"`
}

type DescribeScalingPoliciesResponse struct {
	ContentType                   string
	DescribeScalingPoliciesOutput *shared.DescribeScalingPoliciesOutput
	InternalServiceException      *interface{}
	InvalidRequestException       *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnauthorizedException         *interface{}
}
