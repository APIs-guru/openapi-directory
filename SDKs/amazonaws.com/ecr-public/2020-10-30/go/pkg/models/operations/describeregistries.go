package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRegistriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeRegistriesXAmzTargetEnum string

const (
	DescribeRegistriesXAmzTargetEnumSpencerFrontendServiceDescribeRegistries DescribeRegistriesXAmzTargetEnum = "SpencerFrontendService.DescribeRegistries"
)

type DescribeRegistriesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRegistriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRegistriesRequest struct {
	QueryParams DescribeRegistriesQueryParams
	Headers     DescribeRegistriesHeaders
	Request     shared.DescribeRegistriesRequest `request:"mediaType=application/json"`
}

type DescribeRegistriesResponse struct {
	ContentType                 string
	DescribeRegistriesResponse  *shared.DescribeRegistriesResponse
	InvalidParameterException   *interface{}
	ServerException             *interface{}
	StatusCode                  int64
	UnsupportedCommandException *interface{}
}
