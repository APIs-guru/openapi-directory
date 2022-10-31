package operations

type PostDescribeCacheParameterGroupsActionEnum string

const (
	PostDescribeCacheParameterGroupsActionEnumDescribeCacheParameterGroups PostDescribeCacheParameterGroupsActionEnum = "DescribeCacheParameterGroups"
)

type PostDescribeCacheParameterGroupsVersionEnum string

const (
	PostDescribeCacheParameterGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheParameterGroupsVersionEnum = "2015-02-02"
)

type PostDescribeCacheParameterGroupsQueryParams struct {
	Action     PostDescribeCacheParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                     `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCacheParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCacheParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeCacheParameterGroupsRequest struct {
	QueryParams PostDescribeCacheParameterGroupsQueryParams
	Headers     PostDescribeCacheParameterGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCacheParameterGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
