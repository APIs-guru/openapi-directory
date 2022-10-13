package operations

type GetListAccountAliasesActionEnum string

const (
	GetListAccountAliasesActionEnumListAccountAliases GetListAccountAliasesActionEnum = "ListAccountAliases"
)

type GetListAccountAliasesVersionEnum string

const (
	GetListAccountAliasesVersionEnumTwoThousandAndTen0508 GetListAccountAliasesVersionEnum = "2010-05-08"
)

type GetListAccountAliasesQueryParams struct {
	Action   GetListAccountAliasesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                           `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  GetListAccountAliasesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAccountAliasesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAccountAliasesRequest struct {
	QueryParams GetListAccountAliasesQueryParams
	Headers     GetListAccountAliasesHeaders
}

type GetListAccountAliasesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
