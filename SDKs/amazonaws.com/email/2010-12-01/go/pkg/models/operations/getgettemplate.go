package operations

type GetGetTemplateActionEnum string

const (
	GetGetTemplateActionEnumGetTemplate GetGetTemplateActionEnum = "GetTemplate"
)

type GetGetTemplateVersionEnum string

const (
	GetGetTemplateVersionEnumTwoThousandAndTen1201 GetGetTemplateVersionEnum = "2010-12-01"
)

type GetGetTemplateQueryParams struct {
	Action       GetGetTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TemplateName string                    `queryParam:"style=form,explode=true,name=TemplateName"`
	Version      GetGetTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetTemplateRequest struct {
	QueryParams GetGetTemplateQueryParams
	Headers     GetGetTemplateHeaders
}

type GetGetTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
