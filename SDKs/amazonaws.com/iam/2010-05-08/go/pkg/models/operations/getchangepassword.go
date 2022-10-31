package operations

type GetChangePasswordActionEnum string

const (
	GetChangePasswordActionEnumChangePassword GetChangePasswordActionEnum = "ChangePassword"
)

type GetChangePasswordVersionEnum string

const (
	GetChangePasswordVersionEnumTwoThousandAndTen0508 GetChangePasswordVersionEnum = "2010-05-08"
)

type GetChangePasswordQueryParams struct {
	Action      GetChangePasswordActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NewPassword string                       `queryParam:"style=form,explode=true,name=NewPassword"`
	OldPassword string                       `queryParam:"style=form,explode=true,name=OldPassword"`
	Version     GetChangePasswordVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetChangePasswordHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetChangePasswordRequest struct {
	QueryParams GetChangePasswordQueryParams
	Headers     GetChangePasswordHeaders
}

type GetChangePasswordResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
