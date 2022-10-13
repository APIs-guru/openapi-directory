package operations

type PostDeleteCacheSubnetGroupActionEnum string

const (
	PostDeleteCacheSubnetGroupActionEnumDeleteCacheSubnetGroup PostDeleteCacheSubnetGroupActionEnum = "DeleteCacheSubnetGroup"
)

type PostDeleteCacheSubnetGroupVersionEnum string

const (
	PostDeleteCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteCacheSubnetGroupVersionEnum = "2015-02-02"
)

type PostDeleteCacheSubnetGroupQueryParams struct {
	Action  PostDeleteCacheSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteCacheSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteCacheSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteCacheSubnetGroupRequest struct {
	QueryParams PostDeleteCacheSubnetGroupQueryParams
	Headers     PostDeleteCacheSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteCacheSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
