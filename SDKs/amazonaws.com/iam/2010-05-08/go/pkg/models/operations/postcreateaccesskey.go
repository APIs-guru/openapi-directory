package operations

type PostCreateAccessKeyActionEnum string

const (
	PostCreateAccessKeyActionEnumCreateAccessKey PostCreateAccessKeyActionEnum = "CreateAccessKey"
)

type PostCreateAccessKeyVersionEnum string

const (
	PostCreateAccessKeyVersionEnumTwoThousandAndTen0508 PostCreateAccessKeyVersionEnum = "2010-05-08"
)

type PostCreateAccessKeyQueryParams struct {
	Action  PostCreateAccessKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateAccessKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateAccessKeyRequest struct {
	QueryParams PostCreateAccessKeyQueryParams
	Headers     PostCreateAccessKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateAccessKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
