package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImageTagsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeImageTagsXAmzTargetEnum string

const (
	DescribeImageTagsXAmzTargetEnumSpencerFrontendServiceDescribeImageTags DescribeImageTagsXAmzTargetEnum = "SpencerFrontendService.DescribeImageTags"
)

type DescribeImageTagsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImageTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeImageTagsRequest struct {
	QueryParams DescribeImageTagsQueryParams
	Headers     DescribeImageTagsHeaders
	Request     shared.DescribeImageTagsRequest `request:"mediaType=application/json"`
}

type DescribeImageTagsResponse struct {
	ContentType                 string
	DescribeImageTagsResponse   *shared.DescribeImageTagsResponse
	InvalidParameterException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
