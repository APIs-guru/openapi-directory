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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
