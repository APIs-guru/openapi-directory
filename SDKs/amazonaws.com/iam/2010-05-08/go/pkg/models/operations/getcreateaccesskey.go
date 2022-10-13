package operations

type GetCreateAccessKeyActionEnum string

const (
	GetCreateAccessKeyActionEnumCreateAccessKey GetCreateAccessKeyActionEnum = "CreateAccessKey"
)

type GetCreateAccessKeyVersionEnum string

const (
	GetCreateAccessKeyVersionEnumTwoThousandAndTen0508 GetCreateAccessKeyVersionEnum = "2010-05-08"
)

type GetCreateAccessKeyQueryParams struct {
	Action   GetCreateAccessKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName *string                       `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetCreateAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateAccessKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateAccessKeyRequest struct {
	QueryParams GetCreateAccessKeyQueryParams
	Headers     GetCreateAccessKeyHeaders
}

type GetCreateAccessKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
