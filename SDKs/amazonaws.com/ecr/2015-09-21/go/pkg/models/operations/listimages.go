package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImagesXAmzTargetEnum string

const (
	ListImagesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921ListImages ListImagesXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.ListImages"
)

type ListImagesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListImagesRequest struct {
	QueryParams ListImagesQueryParams
	Headers     ListImagesHeaders
	Request     shared.ListImagesRequest `request:"mediaType=application/json"`
}

type ListImagesResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	ListImagesResponse          *shared.ListImagesResponse
	RepositoryNotFoundException *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
