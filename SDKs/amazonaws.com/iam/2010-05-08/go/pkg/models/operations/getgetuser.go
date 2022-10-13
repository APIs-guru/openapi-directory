package operations

type GetGetUserActionEnum string

const (
	GetGetUserActionEnumGetUser GetGetUserActionEnum = "GetUser"
)

type GetGetUserVersionEnum string

const (
	GetGetUserVersionEnumTwoThousandAndTen0508 GetGetUserVersionEnum = "2010-05-08"
)

type GetGetUserQueryParams struct {
	Action   GetGetUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName *string               `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetGetUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetUserRequest struct {
	QueryParams GetGetUserQueryParams
	Headers     GetGetUserHeaders
}

type GetGetUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
