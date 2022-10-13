package operations

type PostUploadSSHPublicKeyActionEnum string

const (
	PostUploadSSHPublicKeyActionEnumUploadSSHPublicKey PostUploadSSHPublicKeyActionEnum = "UploadSSHPublicKey"
)

type PostUploadSSHPublicKeyVersionEnum string

const (
	PostUploadSSHPublicKeyVersionEnumTwoThousandAndTen0508 PostUploadSSHPublicKeyVersionEnum = "2010-05-08"
)

type PostUploadSSHPublicKeyQueryParams struct {
	Action  PostUploadSSHPublicKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUploadSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUploadSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUploadSSHPublicKeyRequest struct {
	QueryParams PostUploadSSHPublicKeyQueryParams
	Headers     PostUploadSSHPublicKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUploadSSHPublicKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
