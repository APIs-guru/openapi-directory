package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAggregationAuthorizationsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAggregationAuthorizationsXAmzTargetEnum string

const (
	DescribeAggregationAuthorizationsXAmzTargetEnumStarlingDoveServiceDescribeAggregationAuthorizations DescribeAggregationAuthorizationsXAmzTargetEnum = "StarlingDoveService.DescribeAggregationAuthorizations"
)

type DescribeAggregationAuthorizationsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAggregationAuthorizationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAggregationAuthorizationsRequest struct {
	QueryParams DescribeAggregationAuthorizationsQueryParams
	Headers     DescribeAggregationAuthorizationsHeaders
	Request     shared.DescribeAggregationAuthorizationsRequest `request:"mediaType=application/json"`
}

type DescribeAggregationAuthorizationsResponse struct {
	ContentType                               string
	DescribeAggregationAuthorizationsResponse *shared.DescribeAggregationAuthorizationsResponse
	InvalidLimitException                     *interface{}
	InvalidNextTokenException                 *interface{}
	InvalidParameterValueException            *interface{}
	StatusCode                                int64
}
