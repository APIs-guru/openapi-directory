package operations

type PostSetIdentityDkimEnabledActionEnum string

const (
	PostSetIdentityDkimEnabledActionEnumSetIdentityDkimEnabled PostSetIdentityDkimEnabledActionEnum = "SetIdentityDkimEnabled"
)

type PostSetIdentityDkimEnabledVersionEnum string

const (
	PostSetIdentityDkimEnabledVersionEnumTwoThousandAndTen1201 PostSetIdentityDkimEnabledVersionEnum = "2010-12-01"
)

type PostSetIdentityDkimEnabledQueryParams struct {
	Action  PostSetIdentityDkimEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIdentityDkimEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIdentityDkimEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetIdentityDkimEnabledRequest struct {
	QueryParams PostSetIdentityDkimEnabledQueryParams
	Headers     PostSetIdentityDkimEnabledHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIdentityDkimEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
