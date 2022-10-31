package operations

type PostResetCacheParameterGroupActionEnum string

const (
	PostResetCacheParameterGroupActionEnumResetCacheParameterGroup PostResetCacheParameterGroupActionEnum = "ResetCacheParameterGroup"
)

type PostResetCacheParameterGroupVersionEnum string

const (
	PostResetCacheParameterGroupVersionEnumTwoThousandAndFifteen0202 PostResetCacheParameterGroupVersionEnum = "2015-02-02"
)

type PostResetCacheParameterGroupQueryParams struct {
	Action  PostResetCacheParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetCacheParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetCacheParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostResetCacheParameterGroupRequest struct {
	QueryParams PostResetCacheParameterGroupQueryParams
	Headers     PostResetCacheParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetCacheParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
