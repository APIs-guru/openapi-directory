package operations

type GetDescribeCacheSubnetGroupsActionEnum string

const (
	GetDescribeCacheSubnetGroupsActionEnumDescribeCacheSubnetGroups GetDescribeCacheSubnetGroupsActionEnum = "DescribeCacheSubnetGroups"
)

type GetDescribeCacheSubnetGroupsVersionEnum string

const (
	GetDescribeCacheSubnetGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheSubnetGroupsVersionEnum = "2015-02-02"
)

type GetDescribeCacheSubnetGroupsQueryParams struct {
	Action               GetDescribeCacheSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheSubnetGroupName *string                                 `queryParam:"style=form,explode=true,name=CacheSubnetGroupName"`
	Marker               *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version              GetDescribeCacheSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeCacheSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeCacheSubnetGroupsRequest struct {
	QueryParams GetDescribeCacheSubnetGroupsQueryParams
	Headers     GetDescribeCacheSubnetGroupsHeaders
}

type GetDescribeCacheSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
