package operations

type PostDescribeCacheSecurityGroupsActionEnum string

const (
	PostDescribeCacheSecurityGroupsActionEnumDescribeCacheSecurityGroups PostDescribeCacheSecurityGroupsActionEnum = "DescribeCacheSecurityGroups"
)

type PostDescribeCacheSecurityGroupsVersionEnum string

const (
	PostDescribeCacheSecurityGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheSecurityGroupsVersionEnum = "2015-02-02"
)

type PostDescribeCacheSecurityGroupsQueryParams struct {
	Action     PostDescribeCacheSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCacheSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCacheSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeCacheSecurityGroupsRequest struct {
	QueryParams PostDescribeCacheSecurityGroupsQueryParams
	Headers     PostDescribeCacheSecurityGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCacheSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
