package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeImagesXAmzTargetEnum string

const (
	DescribeImagesXAmzTargetEnumPhotonAdminProxyServiceDescribeImages DescribeImagesXAmzTargetEnum = "PhotonAdminProxyService.DescribeImages"
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
	ContentType                          string
	DescribeImagesResult                 *shared.DescribeImagesResult
	InvalidParameterCombinationException *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
