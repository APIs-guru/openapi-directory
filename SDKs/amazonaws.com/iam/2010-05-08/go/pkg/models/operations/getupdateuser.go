package operations

type GetUpdateUserActionEnum string

const (
	GetUpdateUserActionEnumUpdateUser GetUpdateUserActionEnum = "UpdateUser"
)

type GetUpdateUserVersionEnum string

const (
	GetUpdateUserVersionEnumTwoThousandAndTen0508 GetUpdateUserVersionEnum = "2010-05-08"
)

type GetUpdateUserQueryParams struct {
	Action      GetUpdateUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NewPath     *string                  `queryParam:"style=form,explode=true,name=NewPath"`
	NewUserName *string                  `queryParam:"style=form,explode=true,name=NewUserName"`
	UserName    string                   `queryParam:"style=form,explode=true,name=UserName"`
	Version     GetUpdateUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateUserHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateUserRequest struct {
	QueryParams GetUpdateUserQueryParams
	Headers     GetUpdateUserHeaders
}

type GetUpdateUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
