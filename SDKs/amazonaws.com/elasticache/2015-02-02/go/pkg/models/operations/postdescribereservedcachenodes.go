package operations

type PostDescribeReservedCacheNodesActionEnum string

const (
	PostDescribeReservedCacheNodesActionEnumDescribeReservedCacheNodes PostDescribeReservedCacheNodesActionEnum = "DescribeReservedCacheNodes"
)

type PostDescribeReservedCacheNodesVersionEnum string

const (
	PostDescribeReservedCacheNodesVersionEnumTwoThousandAndFifteen0202 PostDescribeReservedCacheNodesVersionEnum = "2015-02-02"
)

type PostDescribeReservedCacheNodesQueryParams struct {
	Action     PostDescribeReservedCacheNodesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReservedCacheNodesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedCacheNodesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedCacheNodesRequest struct {
	QueryParams PostDescribeReservedCacheNodesQueryParams
	Headers     PostDescribeReservedCacheNodesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedCacheNodesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
