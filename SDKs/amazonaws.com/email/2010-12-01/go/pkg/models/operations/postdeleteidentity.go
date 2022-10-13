package operations

type PostDeleteIdentityActionEnum string

const (
	PostDeleteIdentityActionEnumDeleteIdentity PostDeleteIdentityActionEnum = "DeleteIdentity"
)

type PostDeleteIdentityVersionEnum string

const (
	PostDeleteIdentityVersionEnumTwoThousandAndTen1201 PostDeleteIdentityVersionEnum = "2010-12-01"
)

type PostDeleteIdentityQueryParams struct {
	Action  PostDeleteIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteIdentityRequest struct {
	QueryParams PostDeleteIdentityQueryParams
	Headers     PostDeleteIdentityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
