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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCustomDomainsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
