package operations

type GetDeleteAccountAliasActionEnum string

const (
	GetDeleteAccountAliasActionEnumDeleteAccountAlias GetDeleteAccountAliasActionEnum = "DeleteAccountAlias"
)

type GetDeleteAccountAliasVersionEnum string

const (
	GetDeleteAccountAliasVersionEnumTwoThousandAndTen0508 GetDeleteAccountAliasVersionEnum = "2010-05-08"
)

type GetDeleteAccountAliasQueryParams struct {
	AccountAlias string                           `queryParam:"style=form,explode=true,name=AccountAlias"`
	Action       GetDeleteAccountAliasActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version      GetDeleteAccountAliasVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAccountAliasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteAccountAliasRequest struct {
	QueryParams GetDeleteAccountAliasQueryParams
	Headers     GetDeleteAccountAliasHeaders
}

type GetDeleteAccountAliasResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
