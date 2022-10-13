package operations

type GetDeleteCustomVerificationEmailTemplateActionEnum string

const (
	GetDeleteCustomVerificationEmailTemplateActionEnumDeleteCustomVerificationEmailTemplate GetDeleteCustomVerificationEmailTemplateActionEnum = "DeleteCustomVerificationEmailTemplate"
)

type GetDeleteCustomVerificationEmailTemplateVersionEnum string

const (
	GetDeleteCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 GetDeleteCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type GetDeleteCustomVerificationEmailTemplateQueryParams struct {
	Action       GetDeleteCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TemplateName string                                              `queryParam:"style=form,explode=true,name=TemplateName"`
	Version      GetDeleteCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteCustomVerificationEmailTemplateRequest struct {
	QueryParams GetDeleteCustomVerificationEmailTemplateQueryParams
	Headers     GetDeleteCustomVerificationEmailTemplateHeaders
}

type GetDeleteCustomVerificationEmailTemplateResponse struct {
	ContentType string
	StatusCode  int64
}
