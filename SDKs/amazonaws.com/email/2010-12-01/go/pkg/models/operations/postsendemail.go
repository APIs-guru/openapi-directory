package operations

type PostSendEmailActionEnum string

const (
	PostSendEmailActionEnumSendEmail PostSendEmailActionEnum = "SendEmail"
)

type PostSendEmailVersionEnum string

const (
	PostSendEmailVersionEnumTwoThousandAndTen1201 PostSendEmailVersionEnum = "2010-12-01"
)

type PostSendEmailQueryParams struct {
	Action  PostSendEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendEmailHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSendEmailRequest struct {
	QueryParams PostSendEmailQueryParams
	Headers     PostSendEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
