package operations

type PostGetCustomVerificationEmailTemplateActionEnum string

const (
	PostGetCustomVerificationEmailTemplateActionEnumGetCustomVerificationEmailTemplate PostGetCustomVerificationEmailTemplateActionEnum = "GetCustomVerificationEmailTemplate"
)

type PostGetCustomVerificationEmailTemplateVersionEnum string

const (
	PostGetCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 PostGetCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type PostGetCustomVerificationEmailTemplateQueryParams struct {
	Action  PostGetCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetCustomVerificationEmailTemplateRequest struct {
	QueryParams PostGetCustomVerificationEmailTemplateQueryParams
	Headers     PostGetCustomVerificationEmailTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
