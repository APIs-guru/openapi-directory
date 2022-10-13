package operations

type PostDescribeCacheParametersActionEnum string

const (
	PostDescribeCacheParametersActionEnumDescribeCacheParameters PostDescribeCacheParametersActionEnum = "DescribeCacheParameters"
)

type PostDescribeCacheParametersVersionEnum string

const (
	PostDescribeCacheParametersVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheParametersVersionEnum = "2015-02-02"
)

type PostDescribeCacheParametersQueryParams struct {
	Action     PostDescribeCacheParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCacheParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCacheParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCacheParametersRequest struct {
	QueryParams PostDescribeCacheParametersQueryParams
	Headers     PostDescribeCacheParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCacheParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
