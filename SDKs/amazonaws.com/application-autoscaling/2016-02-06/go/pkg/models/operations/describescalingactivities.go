package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeScalingActivitiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeScalingActivitiesXAmzTargetEnum string

const (
	DescribeScalingActivitiesXAmzTargetEnumAnyScaleFrontendServiceDescribeScalingActivities DescribeScalingActivitiesXAmzTargetEnum = "AnyScaleFrontendService.DescribeScalingActivities"
)

type DescribeScalingActivitiesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeScalingActivitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeScalingActivitiesRequest struct {
	QueryParams DescribeScalingActivitiesQueryParams
	Headers     DescribeScalingActivitiesHeaders
	Request     shared.DescribeScalingActivitiesRequest `request:"mediaType=application/json"`
}

type DescribeScalingActivitiesResponse struct {
	ConcurrentUpdateException         *interface{}
	ContentType                       string
	DescribeScalingActivitiesResponse *shared.DescribeScalingActivitiesResponse
	InternalServiceException          *interface{}
	InvalidNextTokenException         *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
