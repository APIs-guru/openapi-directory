package operations

type GetDeleteUserActionEnum string

const (
	GetDeleteUserActionEnumDeleteUser GetDeleteUserActionEnum = "DeleteUser"
)

type GetDeleteUserVersionEnum string

const (
	GetDeleteUserVersionEnumTwoThousandAndTen0508 GetDeleteUserVersionEnum = "2010-05-08"
)

type GetDeleteUserQueryParams struct {
	Action   GetDeleteUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName string                   `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetDeleteUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteUserRequest struct {
	QueryParams GetDeleteUserQueryParams
	Headers     GetDeleteUserHeaders
}

type GetDeleteUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
