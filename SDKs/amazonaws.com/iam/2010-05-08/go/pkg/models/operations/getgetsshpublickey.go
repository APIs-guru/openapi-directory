package operations

type GetGetSSHPublicKeyActionEnum string

const (
	GetGetSSHPublicKeyActionEnumGetSSHPublicKey GetGetSSHPublicKeyActionEnum = "GetSSHPublicKey"
)

type GetGetSSHPublicKeyEncodingEnum string

const (
	GetGetSSHPublicKeyEncodingEnumSSH GetGetSSHPublicKeyEncodingEnum = "SSH"
	GetGetSSHPublicKeyEncodingEnumPem GetGetSSHPublicKeyEncodingEnum = "PEM"
)

type GetGetSSHPublicKeyVersionEnum string

const (
	GetGetSSHPublicKeyVersionEnumTwoThousandAndTen0508 GetGetSSHPublicKeyVersionEnum = "2010-05-08"
)

type GetGetSSHPublicKeyQueryParams struct {
	Action         GetGetSSHPublicKeyActionEnum   `queryParam:"style=form,explode=true,name=Action"`
	Encoding       GetGetSSHPublicKeyEncodingEnum `queryParam:"style=form,explode=true,name=Encoding"`
	SSHPublicKeyID string                         `queryParam:"style=form,explode=true,name=SSHPublicKeyId"`
	UserName       string                         `queryParam:"style=form,explode=true,name=UserName"`
	Version        GetGetSSHPublicKeyVersionEnum  `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetSSHPublicKeyRequest struct {
	QueryParams GetGetSSHPublicKeyQueryParams
	Headers     GetGetSSHPublicKeyHeaders
}

type GetGetSSHPublicKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
