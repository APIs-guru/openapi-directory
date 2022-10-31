package operations

type GetListCustomVerificationEmailTemplatesActionEnum string

const (
	GetListCustomVerificationEmailTemplatesActionEnumListCustomVerificationEmailTemplates GetListCustomVerificationEmailTemplatesActionEnum = "ListCustomVerificationEmailTemplates"
)

type GetListCustomVerificationEmailTemplatesVersionEnum string

const (
	GetListCustomVerificationEmailTemplatesVersionEnumTwoThousandAndTen1201 GetListCustomVerificationEmailTemplatesVersionEnum = "2010-12-01"
)

type GetListCustomVerificationEmailTemplatesQueryParams struct {
	Action     GetListCustomVerificationEmailTemplatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *int64                                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    GetListCustomVerificationEmailTemplatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListCustomVerificationEmailTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListCustomVerificationEmailTemplatesRequest struct {
	QueryParams GetListCustomVerificationEmailTemplatesQueryParams
	Headers     GetListCustomVerificationEmailTemplatesHeaders
}

type GetListCustomVerificationEmailTemplatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
