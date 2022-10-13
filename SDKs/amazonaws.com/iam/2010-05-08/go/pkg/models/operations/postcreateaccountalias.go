package operations

type PostCreateAccountAliasActionEnum string

const (
	PostCreateAccountAliasActionEnumCreateAccountAlias PostCreateAccountAliasActionEnum = "CreateAccountAlias"
)

type PostCreateAccountAliasVersionEnum string

const (
	PostCreateAccountAliasVersionEnumTwoThousandAndTen0508 PostCreateAccountAliasVersionEnum = "2010-05-08"
)

type PostCreateAccountAliasQueryParams struct {
	Action  PostCreateAccountAliasActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAccountAliasVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAccountAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateAccountAliasRequest struct {
	QueryParams PostCreateAccountAliasQueryParams
	Headers     PostCreateAccountAliasHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAccountAliasResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
