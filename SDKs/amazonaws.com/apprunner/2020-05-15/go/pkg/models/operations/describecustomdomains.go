package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomDomainsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeCustomDomainsXAmzTargetEnum string

const (
	DescribeCustomDomainsXAmzTargetEnumAppRunnerDescribeCustomDomains DescribeCustomDomainsXAmzTargetEnum = "AppRunner.DescribeCustomDomains"
)

type DescribeCustomDomainsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCustomDomainsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCustomDomainsRequest struct {
	QueryParams DescribeCustomDomainsQueryParams
	Headers     DescribeCustomDomainsHeaders
	Request     shared.DescribeCustomDomainsRequest `request:"mediaType=application/json"`
}

type DescribeCustomDomainsResponse struct {
	ContentType                   string
	DescribeCustomDomainsResponse *shared.DescribeCustomDomainsResponse
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
