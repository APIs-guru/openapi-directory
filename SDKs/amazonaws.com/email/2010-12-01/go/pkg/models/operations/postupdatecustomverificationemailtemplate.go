package operations

type PostUpdateCustomVerificationEmailTemplateActionEnum string

const (
	PostUpdateCustomVerificationEmailTemplateActionEnumUpdateCustomVerificationEmailTemplate PostUpdateCustomVerificationEmailTemplateActionEnum = "UpdateCustomVerificationEmailTemplate"
)

type PostUpdateCustomVerificationEmailTemplateVersionEnum string

const (
	PostUpdateCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 PostUpdateCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type PostUpdateCustomVerificationEmailTemplateQueryParams struct {
	Action  PostUpdateCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateCustomVerificationEmailTemplateRequest struct {
	QueryParams PostUpdateCustomVerificationEmailTemplateQueryParams
	Headers     PostUpdateCustomVerificationEmailTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
