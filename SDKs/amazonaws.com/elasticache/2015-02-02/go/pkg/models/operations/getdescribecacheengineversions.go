package operations

type GetDescribeCacheEngineVersionsActionEnum string

const (
	GetDescribeCacheEngineVersionsActionEnumDescribeCacheEngineVersions GetDescribeCacheEngineVersionsActionEnum = "DescribeCacheEngineVersions"
)

type GetDescribeCacheEngineVersionsVersionEnum string

const (
	GetDescribeCacheEngineVersionsVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheEngineVersionsVersionEnum = "2015-02-02"
)

type GetDescribeCacheEngineVersionsQueryParams struct {
	Action                    GetDescribeCacheEngineVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheParameterGroupFamily *string                                   `queryParam:"style=form,explode=true,name=CacheParameterGroupFamily"`
	DefaultOnly               *bool                                     `queryParam:"style=form,explode=true,name=DefaultOnly"`
	Engine                    *string                                   `queryParam:"style=form,explode=true,name=Engine"`
	EngineVersion             *string                                   `queryParam:"style=form,explode=true,name=EngineVersion"`
	Marker                    *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                *int64                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version                   GetDescribeCacheEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeCacheEngineVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeCacheEngineVersionsRequest struct {
	QueryParams GetDescribeCacheEngineVersionsQueryParams
	Headers     GetDescribeCacheEngineVersionsHeaders
}

type GetDescribeCacheEngineVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
