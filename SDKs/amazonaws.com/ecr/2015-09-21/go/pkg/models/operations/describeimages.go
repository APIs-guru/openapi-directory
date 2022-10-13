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
	DescribeImagesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeImages DescribeImagesXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DescribeImages"
)

type DescribeImagesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
