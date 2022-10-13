package operations

type GetDeleteAccessKeyActionEnum string

const (
	GetDeleteAccessKeyActionEnumDeleteAccessKey GetDeleteAccessKeyActionEnum = "DeleteAccessKey"
)

type GetDeleteAccessKeyVersionEnum string

const (
	GetDeleteAccessKeyVersionEnumTwoThousandAndTen0508 GetDeleteAccessKeyVersionEnum = "2010-05-08"
)

type GetDeleteAccessKeyQueryParams struct {
	AccessKeyID string                        `queryParam:"style=form,explode=true,name=AccessKeyId"`
	Action      GetDeleteAccessKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName    *string                       `queryParam:"style=form,explode=true,name=UserName"`
	Version     GetDeleteAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAccessKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteAccessKeyRequest struct {
	QueryParams GetDeleteAccessKeyQueryParams
	Headers     GetDeleteAccessKeyHeaders
}

type GetDeleteAccessKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
