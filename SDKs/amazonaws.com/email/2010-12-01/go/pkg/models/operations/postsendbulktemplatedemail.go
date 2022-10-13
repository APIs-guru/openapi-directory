package operations

type PostSendBulkTemplatedEmailActionEnum string

const (
	PostSendBulkTemplatedEmailActionEnumSendBulkTemplatedEmail PostSendBulkTemplatedEmailActionEnum = "SendBulkTemplatedEmail"
)

type PostSendBulkTemplatedEmailVersionEnum string

const (
	PostSendBulkTemplatedEmailVersionEnumTwoThousandAndTen1201 PostSendBulkTemplatedEmailVersionEnum = "2010-12-01"
)

type PostSendBulkTemplatedEmailQueryParams struct {
	Action  PostSendBulkTemplatedEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendBulkTemplatedEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendBulkTemplatedEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSendBulkTemplatedEmailRequest struct {
	QueryParams PostSendBulkTemplatedEmailQueryParams
	Headers     PostSendBulkTemplatedEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendBulkTemplatedEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
