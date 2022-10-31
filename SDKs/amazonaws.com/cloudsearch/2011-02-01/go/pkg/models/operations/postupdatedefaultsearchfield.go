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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
