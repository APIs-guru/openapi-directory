package operations

type PostTestRenderTemplateActionEnum string

const (
	PostTestRenderTemplateActionEnumTestRenderTemplate PostTestRenderTemplateActionEnum = "TestRenderTemplate"
)

type PostTestRenderTemplateVersionEnum string

const (
	PostTestRenderTemplateVersionEnumTwoThousandAndTen1201 PostTestRenderTemplateVersionEnum = "2010-12-01"
)

type PostTestRenderTemplateQueryParams struct {
	Action  PostTestRenderTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTestRenderTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTestRenderTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostTestRenderTemplateRequest struct {
	QueryParams PostTestRenderTemplateQueryParams
	Headers     PostTestRenderTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTestRenderTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
