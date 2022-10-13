package operations

type GetDeleteTemplateActionEnum string

const (
	GetDeleteTemplateActionEnumDeleteTemplate GetDeleteTemplateActionEnum = "DeleteTemplate"
)

type GetDeleteTemplateVersionEnum string

const (
	GetDeleteTemplateVersionEnumTwoThousandAndTen1201 GetDeleteTemplateVersionEnum = "2010-12-01"
)

type GetDeleteTemplateQueryParams struct {
	Action       GetDeleteTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TemplateName string                       `queryParam:"style=form,explode=true,name=TemplateName"`
	Version      GetDeleteTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTemplateRequest struct {
	QueryParams GetDeleteTemplateQueryParams
	Headers     GetDeleteTemplateHeaders
}

type GetDeleteTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
