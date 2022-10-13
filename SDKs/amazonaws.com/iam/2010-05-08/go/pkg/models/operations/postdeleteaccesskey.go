package operations

type PostDeleteAccessKeyActionEnum string

const (
	PostDeleteAccessKeyActionEnumDeleteAccessKey PostDeleteAccessKeyActionEnum = "DeleteAccessKey"
)

type PostDeleteAccessKeyVersionEnum string

const (
	PostDeleteAccessKeyVersionEnumTwoThousandAndTen0508 PostDeleteAccessKeyVersionEnum = "2010-05-08"
)

type PostDeleteAccessKeyQueryParams struct {
	Action  PostDeleteAccessKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAccessKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAccessKeyRequest struct {
	QueryParams PostDeleteAccessKeyQueryParams
	Headers     PostDeleteAccessKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAccessKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
