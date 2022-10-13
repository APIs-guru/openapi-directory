package operations

type GetListAccessKeysActionEnum string

const (
	GetListAccessKeysActionEnumListAccessKeys GetListAccessKeysActionEnum = "ListAccessKeys"
)

type GetListAccessKeysVersionEnum string

const (
	GetListAccessKeysVersionEnumTwoThousandAndTen0508 GetListAccessKeysVersionEnum = "2010-05-08"
)

type GetListAccessKeysQueryParams struct {
	Action   GetListAccessKeysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                       `queryParam:"style=form,explode=true,name=MaxItems"`
	UserName *string                      `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetListAccessKeysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAccessKeysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAccessKeysRequest struct {
	QueryParams GetListAccessKeysQueryParams
	Headers     GetListAccessKeysHeaders
}

type GetListAccessKeysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
