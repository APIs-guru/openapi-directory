package operations

type GetUpdateAccessKeyActionEnum string

const (
	GetUpdateAccessKeyActionEnumUpdateAccessKey GetUpdateAccessKeyActionEnum = "UpdateAccessKey"
)

type GetUpdateAccessKeyStatusEnum string

const (
	GetUpdateAccessKeyStatusEnumActive   GetUpdateAccessKeyStatusEnum = "Active"
	GetUpdateAccessKeyStatusEnumInactive GetUpdateAccessKeyStatusEnum = "Inactive"
)

type GetUpdateAccessKeyVersionEnum string

const (
	GetUpdateAccessKeyVersionEnumTwoThousandAndTen0508 GetUpdateAccessKeyVersionEnum = "2010-05-08"
)

type GetUpdateAccessKeyQueryParams struct {
	AccessKeyID string                        `queryParam:"style=form,explode=true,name=AccessKeyId"`
	Action      GetUpdateAccessKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Status      GetUpdateAccessKeyStatusEnum  `queryParam:"style=form,explode=true,name=Status"`
	UserName    *string                       `queryParam:"style=form,explode=true,name=UserName"`
	Version     GetUpdateAccessKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateAccessKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateAccessKeyRequest struct {
	QueryParams GetUpdateAccessKeyQueryParams
	Headers     GetUpdateAccessKeyHeaders
}

type GetUpdateAccessKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
