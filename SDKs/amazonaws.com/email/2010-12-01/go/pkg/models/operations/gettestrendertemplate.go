package operations

type GetTestRenderTemplateActionEnum string

const (
	GetTestRenderTemplateActionEnumTestRenderTemplate GetTestRenderTemplateActionEnum = "TestRenderTemplate"
)

type GetTestRenderTemplateVersionEnum string

const (
	GetTestRenderTemplateVersionEnumTwoThousandAndTen1201 GetTestRenderTemplateVersionEnum = "2010-12-01"
)

type GetTestRenderTemplateQueryParams struct {
	Action       GetTestRenderTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TemplateData string                           `queryParam:"style=form,explode=true,name=TemplateData"`
	TemplateName string                           `queryParam:"style=form,explode=true,name=TemplateName"`
	Version      GetTestRenderTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTestRenderTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTestRenderTemplateRequest struct {
	QueryParams GetTestRenderTemplateQueryParams
	Headers     GetTestRenderTemplateHeaders
}

type GetTestRenderTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
