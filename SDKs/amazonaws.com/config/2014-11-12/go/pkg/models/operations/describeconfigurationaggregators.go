package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConfigurationAggregatorsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConfigurationAggregatorsXAmzTargetEnum string

const (
	DescribeConfigurationAggregatorsXAmzTargetEnumStarlingDoveServiceDescribeConfigurationAggregators DescribeConfigurationAggregatorsXAmzTargetEnum = "StarlingDoveService.DescribeConfigurationAggregators"
)

type DescribeConfigurationAggregatorsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConfigurationAggregatorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConfigurationAggregatorsRequest struct {
	QueryParams DescribeConfigurationAggregatorsQueryParams
	Headers     DescribeConfigurationAggregatorsHeaders
	Request     shared.DescribeConfigurationAggregatorsRequest `request:"mediaType=application/json"`
}

type DescribeConfigurationAggregatorsResponse struct {
	ContentType                              string
	DescribeConfigurationAggregatorsResponse *shared.DescribeConfigurationAggregatorsResponse
	InvalidLimitException                    *interface{}
	InvalidNextTokenException                *interface{}
	InvalidParameterValueException           *interface{}
	NoSuchConfigurationAggregatorException   *interface{}
	StatusCode                               int64
}
