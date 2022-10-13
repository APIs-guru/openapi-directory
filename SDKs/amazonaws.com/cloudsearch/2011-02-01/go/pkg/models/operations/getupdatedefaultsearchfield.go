package operations

type GetUpdateDefaultSearchFieldActionEnum string

const (
	GetUpdateDefaultSearchFieldActionEnumUpdateDefaultSearchField GetUpdateDefaultSearchFieldActionEnum = "UpdateDefaultSearchField"
)

type GetUpdateDefaultSearchFieldVersionEnum string

const (
	GetUpdateDefaultSearchFieldVersionEnumTwoThousandAndEleven0201 GetUpdateDefaultSearchFieldVersionEnum = "2011-02-01"
)

type GetUpdateDefaultSearchFieldQueryParams struct {
	Action             GetUpdateDefaultSearchFieldActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DefaultSearchField string                                 `queryParam:"style=form,explode=true,name=DefaultSearchField"`
	DomainName         string                                 `queryParam:"style=form,explode=true,name=DomainName"`
	Version            GetUpdateDefaultSearchFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateDefaultSearchFieldHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateDefaultSearchFieldRequest struct {
	QueryParams GetUpdateDefaultSearchFieldQueryParams
	Headers     GetUpdateDefaultSearchFieldHeaders
}

type GetUpdateDefaultSearchFieldResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
