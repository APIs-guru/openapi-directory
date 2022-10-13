package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImageScanFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeImageScanFindingsXAmzTargetEnum string

const (
	DescribeImageScanFindingsXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeImageScanFindings DescribeImageScanFindingsXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"
)

type DescribeImageScanFindingsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImageScanFindingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeImageScanFindingsRequest struct {
	QueryParams DescribeImageScanFindingsQueryParams
	Headers     DescribeImageScanFindingsHeaders
	Request     shared.DescribeImageScanFindingsRequest `request:"mediaType=application/json"`
}

type DescribeImageScanFindingsResponse struct {
	ContentType                       string
	DescribeImageScanFindingsResponse *shared.DescribeImageScanFindingsResponse
	ImageNotFoundException            *interface{}
	InvalidParameterException         *interface{}
	RepositoryNotFoundException       *interface{}
	ScanNotFoundException             *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
