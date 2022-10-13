package operations

type PostDescribeCacheEngineVersionsActionEnum string

const (
	PostDescribeCacheEngineVersionsActionEnumDescribeCacheEngineVersions PostDescribeCacheEngineVersionsActionEnum = "DescribeCacheEngineVersions"
)

type PostDescribeCacheEngineVersionsVersionEnum string

const (
	PostDescribeCacheEngineVersionsVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheEngineVersionsVersionEnum = "2015-02-02"
)

type PostDescribeCacheEngineVersionsQueryParams struct {
	Action     PostDescribeCacheEngineVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCacheEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCacheEngineVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCacheEngineVersionsRequest struct {
	QueryParams PostDescribeCacheEngineVersionsQueryParams
	Headers     PostDescribeCacheEngineVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCacheEngineVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
