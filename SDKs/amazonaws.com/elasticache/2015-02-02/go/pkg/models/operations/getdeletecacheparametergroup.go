package operations

type GetDeleteCacheParameterGroupActionEnum string

const (
	GetDeleteCacheParameterGroupActionEnumDeleteCacheParameterGroup GetDeleteCacheParameterGroupActionEnum = "DeleteCacheParameterGroup"
)

type GetDeleteCacheParameterGroupVersionEnum string

const (
	GetDeleteCacheParameterGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteCacheParameterGroupVersionEnum = "2015-02-02"
)

type GetDeleteCacheParameterGroupQueryParams struct {
	Action                  GetDeleteCacheParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheParameterGroupName string                                  `queryParam:"style=form,explode=true,name=CacheParameterGroupName"`
	Version                 GetDeleteCacheParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCacheParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteCacheParameterGroupRequest struct {
	QueryParams GetDeleteCacheParameterGroupQueryParams
	Headers     GetDeleteCacheParameterGroupHeaders
}

type GetDeleteCacheParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
