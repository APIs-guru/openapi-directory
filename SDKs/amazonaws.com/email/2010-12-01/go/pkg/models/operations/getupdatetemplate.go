package operations

type GetUpdateTemplateActionEnum string

const (
	GetUpdateTemplateActionEnumUpdateTemplate GetUpdateTemplateActionEnum = "UpdateTemplate"
)

// GetUpdateTemplateTemplate
// The content of the email, composed of a subject line, an HTML part, and a text-only part.
type GetUpdateTemplateTemplate struct {
	HTMLPart     *string `queryParam:"name=HtmlPart"`
	SubjectPart  *string `queryParam:"name=SubjectPart"`
	TemplateName string  `queryParam:"name=TemplateName"`
	TextPart     *string `queryParam:"name=TextPart"`
}

type GetUpdateTemplateVersionEnum string

const (
	GetUpdateTemplateVersionEnumTwoThousandAndTen1201 GetUpdateTemplateVersionEnum = "2010-12-01"
)

type GetUpdateTemplateQueryParams struct {
	Action   GetUpdateTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Template GetUpdateTemplateTemplate    `queryParam:"style=form,explode=true,name=Template"`
	Version  GetUpdateTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateTemplateRequest struct {
	QueryParams GetUpdateTemplateQueryParams
	Headers     GetUpdateTemplateHeaders
}

type GetUpdateTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
