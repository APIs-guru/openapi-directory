package operations

type GetListSSHPublicKeysActionEnum string

const (
	GetListSSHPublicKeysActionEnumListSSHPublicKeys GetListSSHPublicKeysActionEnum = "ListSSHPublicKeys"
)

type GetListSSHPublicKeysVersionEnum string

const (
	GetListSSHPublicKeysVersionEnumTwoThousandAndTen0508 GetListSSHPublicKeysVersionEnum = "2010-05-08"
)

type GetListSSHPublicKeysQueryParams struct {
	Action   GetListSSHPublicKeysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                          `queryParam:"style=form,explode=true,name=MaxItems"`
	UserName *string                         `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetListSSHPublicKeysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListSSHPublicKeysHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListSSHPublicKeysRequest struct {
	QueryParams GetListSSHPublicKeysQueryParams
	Headers     GetListSSHPublicKeysHeaders
}

type GetListSSHPublicKeysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
