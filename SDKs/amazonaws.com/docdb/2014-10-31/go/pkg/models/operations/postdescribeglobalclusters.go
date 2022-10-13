package operations

type PostDescribeGlobalClustersActionEnum string

const (
	PostDescribeGlobalClustersActionEnumDescribeGlobalClusters PostDescribeGlobalClustersActionEnum = "DescribeGlobalClusters"
)

type PostDescribeGlobalClustersVersionEnum string

const (
	PostDescribeGlobalClustersVersionEnumTwoThousandAndFourteen1031 PostDescribeGlobalClustersVersionEnum = "2014-10-31"
)

type PostDescribeGlobalClustersQueryParams struct {
	Action     PostDescribeGlobalClustersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeGlobalClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeGlobalClustersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeGlobalClustersRequest struct {
	QueryParams PostDescribeGlobalClustersQueryParams
	Headers     PostDescribeGlobalClustersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeGlobalClustersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
