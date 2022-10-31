package operations

type PostListCustomVerificationEmailTemplatesActionEnum string

const (
	PostListCustomVerificationEmailTemplatesActionEnumListCustomVerificationEmailTemplates PostListCustomVerificationEmailTemplatesActionEnum = "ListCustomVerificationEmailTemplates"
)

type PostListCustomVerificationEmailTemplatesVersionEnum string

const (
	PostListCustomVerificationEmailTemplatesVersionEnumTwoThousandAndTen1201 PostListCustomVerificationEmailTemplatesVersionEnum = "2010-12-01"
)

type PostListCustomVerificationEmailTemplatesQueryParams struct {
	Action     PostListCustomVerificationEmailTemplatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostListCustomVerificationEmailTemplatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListCustomVerificationEmailTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListCustomVerificationEmailTemplatesRequest struct {
	QueryParams PostListCustomVerificationEmailTemplatesQueryParams
	Headers     PostListCustomVerificationEmailTemplatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListCustomVerificationEmailTemplatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
