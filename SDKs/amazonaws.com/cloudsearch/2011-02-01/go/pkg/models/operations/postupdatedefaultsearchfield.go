package operations

type PostUpdateDefaultSearchFieldActionEnum string

const (
	PostUpdateDefaultSearchFieldActionEnumUpdateDefaultSearchField PostUpdateDefaultSearchFieldActionEnum = "UpdateDefaultSearchField"
)

type PostUpdateDefaultSearchFieldVersionEnum string

const (
	PostUpdateDefaultSearchFieldVersionEnumTwoThousandAndEleven0201 PostUpdateDefaultSearchFieldVersionEnum = "2011-02-01"
)

type PostUpdateDefaultSearchFieldQueryParams struct {
	Action  PostUpdateDefaultSearchFieldActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateDefaultSearchFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateDefaultSearchFieldHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateDefaultSearchFieldRequest struct {
	QueryParams PostUpdateDefaultSearchFieldQueryParams
	Headers     PostUpdateDefaultSearchFieldHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateDefaultSearchFieldResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
