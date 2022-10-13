package operations

type PostDeleteAccountAliasActionEnum string

const (
	PostDeleteAccountAliasActionEnumDeleteAccountAlias PostDeleteAccountAliasActionEnum = "DeleteAccountAlias"
)

type PostDeleteAccountAliasVersionEnum string

const (
	PostDeleteAccountAliasVersionEnumTwoThousandAndTen0508 PostDeleteAccountAliasVersionEnum = "2010-05-08"
)

type PostDeleteAccountAliasQueryParams struct {
	Action  PostDeleteAccountAliasActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAccountAliasVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAccountAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAccountAliasRequest struct {
	QueryParams PostDeleteAccountAliasQueryParams
	Headers     PostDeleteAccountAliasHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAccountAliasResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
