package operations

type GetCreateAccountAliasActionEnum string

const (
	GetCreateAccountAliasActionEnumCreateAccountAlias GetCreateAccountAliasActionEnum = "CreateAccountAlias"
)

type GetCreateAccountAliasVersionEnum string

const (
	GetCreateAccountAliasVersionEnumTwoThousandAndTen0508 GetCreateAccountAliasVersionEnum = "2010-05-08"
)

type GetCreateAccountAliasQueryParams struct {
	AccountAlias string                           `queryParam:"style=form,explode=true,name=AccountAlias"`
	Action       GetCreateAccountAliasActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version      GetCreateAccountAliasVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateAccountAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateAccountAliasRequest struct {
	QueryParams GetCreateAccountAliasQueryParams
	Headers     GetCreateAccountAliasHeaders
}

type GetCreateAccountAliasResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
