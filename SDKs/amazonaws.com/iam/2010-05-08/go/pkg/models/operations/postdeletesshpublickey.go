package operations

type PostDeleteSSHPublicKeyActionEnum string

const (
	PostDeleteSSHPublicKeyActionEnumDeleteSSHPublicKey PostDeleteSSHPublicKeyActionEnum = "DeleteSSHPublicKey"
)

type PostDeleteSSHPublicKeyVersionEnum string

const (
	PostDeleteSSHPublicKeyVersionEnumTwoThousandAndTen0508 PostDeleteSSHPublicKeyVersionEnum = "2010-05-08"
)

type PostDeleteSSHPublicKeyQueryParams struct {
	Action  PostDeleteSSHPublicKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSSHPublicKeyRequest struct {
	QueryParams PostDeleteSSHPublicKeyQueryParams
	Headers     PostDeleteSSHPublicKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSSHPublicKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
