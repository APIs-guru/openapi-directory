package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRepositoriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeRepositoriesXAmzTargetEnum string

const (
	DescribeRepositoriesXAmzTargetEnumSpencerFrontendServiceDescribeRepositories DescribeRepositoriesXAmzTargetEnum = "SpencerFrontendService.DescribeRepositories"
)

type DescribeRepositoriesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRepositoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRepositoriesRequest struct {
	QueryParams DescribeRepositoriesQueryParams
	Headers     DescribeRepositoriesHeaders
	Request     shared.DescribeRepositoriesRequest `request:"mediaType=application/json"`
}

type DescribeRepositoriesResponse struct {
	ContentType                  string
	DescribeRepositoriesResponse *shared.DescribeRepositoriesResponse
	InvalidParameterException    *interface{}
	RepositoryNotFoundException  *interface{}
	ServerException              *interface{}
	StatusCode                   int64
}
