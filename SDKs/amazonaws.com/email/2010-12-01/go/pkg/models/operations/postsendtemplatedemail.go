package operations

type PostSendTemplatedEmailActionEnum string

const (
	PostSendTemplatedEmailActionEnumSendTemplatedEmail PostSendTemplatedEmailActionEnum = "SendTemplatedEmail"
)

type PostSendTemplatedEmailVersionEnum string

const (
	PostSendTemplatedEmailVersionEnumTwoThousandAndTen1201 PostSendTemplatedEmailVersionEnum = "2010-12-01"
)

type PostSendTemplatedEmailQueryParams struct {
	Action  PostSendTemplatedEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendTemplatedEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendTemplatedEmailHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSendTemplatedEmailRequest struct {
	QueryParams PostSendTemplatedEmailQueryParams
	Headers     PostSendTemplatedEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendTemplatedEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
