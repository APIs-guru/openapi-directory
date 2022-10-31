package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeImagesXAmzTargetEnum string

const (
	DescribeImagesXAmzTargetEnumSpencerFrontendServiceDescribeImages DescribeImagesXAmzTargetEnum = "SpencerFrontendService.DescribeImages"
)

type DescribeImagesHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeImagesRequest struct {
	QueryParams DescribeImagesQueryParams
	Headers     DescribeImagesHeaders
	Request     shared.DescribeImagesRequest `request:"mediaType=application/json"`
}

type DescribeImagesResponse struct {
	ContentType                 string
	DescribeImagesResponse      *shared.DescribeImagesResponse
	ImageNotFoundException      *interface{}
	InvalidParameterException   *interface{}
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
