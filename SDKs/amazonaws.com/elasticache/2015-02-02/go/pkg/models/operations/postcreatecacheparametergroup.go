package operations

type PostCreateCacheParameterGroupActionEnum string

const (
	PostCreateCacheParameterGroupActionEnumCreateCacheParameterGroup PostCreateCacheParameterGroupActionEnum = "CreateCacheParameterGroup"
)

type PostCreateCacheParameterGroupVersionEnum string

const (
	PostCreateCacheParameterGroupVersionEnumTwoThousandAndFifteen0202 PostCreateCacheParameterGroupVersionEnum = "2015-02-02"
)

type PostCreateCacheParameterGroupQueryParams struct {
	Action  PostCreateCacheParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCacheParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCacheParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCacheParameterGroupRequest struct {
	QueryParams PostCreateCacheParameterGroupQueryParams
	Headers     PostCreateCacheParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCacheParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
