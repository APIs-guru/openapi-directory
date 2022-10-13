package operations

type PostDetachClassicLinkVpcActionEnum string

const (
	PostDetachClassicLinkVpcActionEnumDetachClassicLinkVpc PostDetachClassicLinkVpcActionEnum = "DetachClassicLinkVpc"
)

type PostDetachClassicLinkVpcVersionEnum string

const (
	PostDetachClassicLinkVpcVersionEnumTwoThousandAndSixteen1115 PostDetachClassicLinkVpcVersionEnum = "2016-11-15"
)

type PostDetachClassicLinkVpcQueryParams struct {
	Action  PostDetachClassicLinkVpcActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachClassicLinkVpcVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachClassicLinkVpcHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachClassicLinkVpcRequest struct {
	QueryParams PostDetachClassicLinkVpcQueryParams
	Headers     PostDetachClassicLinkVpcHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachClassicLinkVpcResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
