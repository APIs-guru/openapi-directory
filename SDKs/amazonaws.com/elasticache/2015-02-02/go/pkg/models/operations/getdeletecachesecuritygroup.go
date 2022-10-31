package operations

type GetDeleteCacheSecurityGroupActionEnum string

const (
	GetDeleteCacheSecurityGroupActionEnumDeleteCacheSecurityGroup GetDeleteCacheSecurityGroupActionEnum = "DeleteCacheSecurityGroup"
)

type GetDeleteCacheSecurityGroupVersionEnum string

const (
	GetDeleteCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteCacheSecurityGroupVersionEnum = "2015-02-02"
)

type GetDeleteCacheSecurityGroupQueryParams struct {
	Action                 GetDeleteCacheSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheSecurityGroupName string                                 `queryParam:"style=form,explode=true,name=CacheSecurityGroupName"`
	Version                GetDeleteCacheSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCacheSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteCacheSecurityGroupRequest struct {
	QueryParams GetDeleteCacheSecurityGroupQueryParams
	Headers     GetDeleteCacheSecurityGroupHeaders
}

type GetDeleteCacheSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
