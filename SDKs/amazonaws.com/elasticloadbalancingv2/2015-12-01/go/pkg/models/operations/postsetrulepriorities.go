package operations

type PostSetRulePrioritiesActionEnum string

const (
	PostSetRulePrioritiesActionEnumSetRulePriorities PostSetRulePrioritiesActionEnum = "SetRulePriorities"
)

type PostSetRulePrioritiesVersionEnum string

const (
	PostSetRulePrioritiesVersionEnumTwoThousandAndFifteen1201 PostSetRulePrioritiesVersionEnum = "2015-12-01"
)

type PostSetRulePrioritiesQueryParams struct {
	Action  PostSetRulePrioritiesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetRulePrioritiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetRulePrioritiesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetRulePrioritiesRequest struct {
	QueryParams PostSetRulePrioritiesQueryParams
	Headers     PostSetRulePrioritiesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetRulePrioritiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
