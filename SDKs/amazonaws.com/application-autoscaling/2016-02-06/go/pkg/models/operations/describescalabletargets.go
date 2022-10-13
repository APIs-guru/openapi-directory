package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalableTargetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeScalableTargetsXAmzTargetEnum string

const (
	DescribeScalableTargetsXAmzTargetEnumAnyScaleFrontendServiceDescribeScalableTargets DescribeScalableTargetsXAmzTargetEnum = "AnyScaleFrontendService.DescribeScalableTargets"
)

type DescribeScalableTargetsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalableTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeScalableTargetsRequest struct {
	QueryParams DescribeScalableTargetsQueryParams
	Headers     DescribeScalableTargetsHeaders
	Request     shared.DescribeScalableTargetsRequest `request:"mediaType=application/json"`
}

type DescribeScalableTargetsResponse struct {
	ConcurrentUpdateException       *interface{}
	ContentType                     string
	DescribeScalableTargetsResponse *shared.DescribeScalableTargetsResponse
	InternalServiceException        *interface{}
	InvalidNextTokenException       *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
