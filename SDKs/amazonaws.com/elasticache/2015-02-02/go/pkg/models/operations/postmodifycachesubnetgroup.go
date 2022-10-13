package operations

type PostModifyCacheSubnetGroupActionEnum string

const (
	PostModifyCacheSubnetGroupActionEnumModifyCacheSubnetGroup PostModifyCacheSubnetGroupActionEnum = "ModifyCacheSubnetGroup"
)

type PostModifyCacheSubnetGroupVersionEnum string

const (
	PostModifyCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202 PostModifyCacheSubnetGroupVersionEnum = "2015-02-02"
)

type PostModifyCacheSubnetGroupQueryParams struct {
	Action  PostModifyCacheSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyCacheSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyCacheSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyCacheSubnetGroupRequest struct {
	QueryParams PostModifyCacheSubnetGroupQueryParams
	Headers     PostModifyCacheSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyCacheSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
