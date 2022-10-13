package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigurationAggregatorSourcesStatusQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum string

const (
	DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnumStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus"
)

type DescribeConfigurationAggregatorSourcesStatusHeaders struct {
	XAmzAlgorithm     *string                                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigurationAggregatorSourcesStatusRequest struct {
	QueryParams DescribeConfigurationAggregatorSourcesStatusQueryParams
	Headers     DescribeConfigurationAggregatorSourcesStatusHeaders
	Request     shared.DescribeConfigurationAggregatorSourcesStatusRequest `request:"mediaType=application/json"`
}

type DescribeConfigurationAggregatorSourcesStatusResponse struct {
	ContentType                                          string
	DescribeConfigurationAggregatorSourcesStatusResponse *shared.DescribeConfigurationAggregatorSourcesStatusResponse
	InvalidLimitException                                *interface{}
	InvalidNextTokenException                            *interface{}
	InvalidParameterValueException                       *interface{}
	NoSuchConfigurationAggregatorException               *interface{}
	StatusCode                                           int64
}
