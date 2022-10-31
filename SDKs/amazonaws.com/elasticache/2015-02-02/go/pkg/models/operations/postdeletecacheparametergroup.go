package operations

type PostDeleteCacheParameterGroupActionEnum string

const (
	PostDeleteCacheParameterGroupActionEnumDeleteCacheParameterGroup PostDeleteCacheParameterGroupActionEnum = "DeleteCacheParameterGroup"
)

type PostDeleteCacheParameterGroupVersionEnum string

const (
	PostDeleteCacheParameterGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteCacheParameterGroupVersionEnum = "2015-02-02"
)

type PostDeleteCacheParameterGroupQueryParams struct {
	Action  PostDeleteCacheParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteCacheParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteCacheParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteCacheParameterGroupRequest struct {
	QueryParams PostDeleteCacheParameterGroupQueryParams
	Headers     PostDeleteCacheParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteCacheParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
