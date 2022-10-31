package operations

type GetDescribeCacheSecurityGroupsActionEnum string

const (
	GetDescribeCacheSecurityGroupsActionEnumDescribeCacheSecurityGroups GetDescribeCacheSecurityGroupsActionEnum = "DescribeCacheSecurityGroups"
)

type GetDescribeCacheSecurityGroupsVersionEnum string

const (
	GetDescribeCacheSecurityGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheSecurityGroupsVersionEnum = "2015-02-02"
)

type GetDescribeCacheSecurityGroupsQueryParams struct {
	Action                 GetDescribeCacheSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheSecurityGroupName *string                                   `queryParam:"style=form,explode=true,name=CacheSecurityGroupName"`
	Marker                 *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords             *int64                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version                GetDescribeCacheSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeCacheSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeCacheSecurityGroupsRequest struct {
	QueryParams GetDescribeCacheSecurityGroupsQueryParams
	Headers     GetDescribeCacheSecurityGroupsHeaders
}

type GetDescribeCacheSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
