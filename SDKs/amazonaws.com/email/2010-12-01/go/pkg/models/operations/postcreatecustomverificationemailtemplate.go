package operations

type PostCreateCustomVerificationEmailTemplateActionEnum string

const (
	PostCreateCustomVerificationEmailTemplateActionEnumCreateCustomVerificationEmailTemplate PostCreateCustomVerificationEmailTemplateActionEnum = "CreateCustomVerificationEmailTemplate"
)

type PostCreateCustomVerificationEmailTemplateVersionEnum string

const (
	PostCreateCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 PostCreateCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type PostCreateCustomVerificationEmailTemplateQueryParams struct {
	Action  PostCreateCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCustomVerificationEmailTemplateRequest struct {
	QueryParams PostCreateCustomVerificationEmailTemplateQueryParams
	Headers     PostCreateCustomVerificationEmailTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
