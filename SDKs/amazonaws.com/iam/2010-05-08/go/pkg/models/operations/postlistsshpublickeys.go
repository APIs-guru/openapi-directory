package operations

type PostListSSHPublicKeysActionEnum string

const (
	PostListSSHPublicKeysActionEnumListSSHPublicKeys PostListSSHPublicKeysActionEnum = "ListSSHPublicKeys"
)

type PostListSSHPublicKeysVersionEnum string

const (
	PostListSSHPublicKeysVersionEnumTwoThousandAndTen0508 PostListSSHPublicKeysVersionEnum = "2010-05-08"
)

type PostListSSHPublicKeysQueryParams struct {
	Action   PostListSSHPublicKeysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                          `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListSSHPublicKeysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListSSHPublicKeysHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListSSHPublicKeysRequest struct {
	QueryParams PostListSSHPublicKeysQueryParams
	Headers     PostListSSHPublicKeysHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListSSHPublicKeysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
