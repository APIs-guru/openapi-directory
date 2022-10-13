package operations

type PostCreateCacheSubnetGroupActionEnum string

const (
	PostCreateCacheSubnetGroupActionEnumCreateCacheSubnetGroup PostCreateCacheSubnetGroupActionEnum = "CreateCacheSubnetGroup"
)

type PostCreateCacheSubnetGroupVersionEnum string

const (
	PostCreateCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202 PostCreateCacheSubnetGroupVersionEnum = "2015-02-02"
)

type PostCreateCacheSubnetGroupQueryParams struct {
	Action  PostCreateCacheSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCacheSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCacheSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCacheSubnetGroupRequest struct {
	QueryParams PostCreateCacheSubnetGroupQueryParams
	Headers     PostCreateCacheSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCacheSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
