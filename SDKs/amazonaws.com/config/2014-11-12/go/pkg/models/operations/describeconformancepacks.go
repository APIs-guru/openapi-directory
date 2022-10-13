package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConformancePacksQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeConformancePacksXAmzTargetEnum string

const (
	DescribeConformancePacksXAmzTargetEnumStarlingDoveServiceDescribeConformancePacks DescribeConformancePacksXAmzTargetEnum = "StarlingDoveService.DescribeConformancePacks"
)

type DescribeConformancePacksHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConformancePacksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConformancePacksRequest struct {
	QueryParams DescribeConformancePacksQueryParams
	Headers     DescribeConformancePacksHeaders
	Request     shared.DescribeConformancePacksRequest `request:"mediaType=application/json"`
}

type DescribeConformancePacksResponse struct {
	ContentType                      string
	DescribeConformancePacksResponse *shared.DescribeConformancePacksResponse
	InvalidLimitException            *interface{}
	InvalidNextTokenException        *interface{}
	InvalidParameterValueException   *interface{}
	NoSuchConformancePackException   *interface{}
	StatusCode                       int64
}
