package operations

type PostUpdateSSHPublicKeyActionEnum string

const (
	PostUpdateSSHPublicKeyActionEnumUpdateSSHPublicKey PostUpdateSSHPublicKeyActionEnum = "UpdateSSHPublicKey"
)

type PostUpdateSSHPublicKeyVersionEnum string

const (
	PostUpdateSSHPublicKeyVersionEnumTwoThousandAndTen0508 PostUpdateSSHPublicKeyVersionEnum = "2010-05-08"
)

type PostUpdateSSHPublicKeyQueryParams struct {
	Action  PostUpdateSSHPublicKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateSSHPublicKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateSSHPublicKeyRequest struct {
	QueryParams PostUpdateSSHPublicKeyQueryParams
	Headers     PostUpdateSSHPublicKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateSSHPublicKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
