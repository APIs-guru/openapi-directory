package operations

type GetUpdateLoginProfileActionEnum string

const (
	GetUpdateLoginProfileActionEnumUpdateLoginProfile GetUpdateLoginProfileActionEnum = "UpdateLoginProfile"
)

type GetUpdateLoginProfileVersionEnum string

const (
	GetUpdateLoginProfileVersionEnumTwoThousandAndTen0508 GetUpdateLoginProfileVersionEnum = "2010-05-08"
)

type GetUpdateLoginProfileQueryParams struct {
	Action                GetUpdateLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Password              *string                          `queryParam:"style=form,explode=true,name=Password"`
	PasswordResetRequired *bool                            `queryParam:"style=form,explode=true,name=PasswordResetRequired"`
	UserName              string                           `queryParam:"style=form,explode=true,name=UserName"`
	Version               GetUpdateLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateLoginProfileRequest struct {
	QueryParams GetUpdateLoginProfileQueryParams
	Headers     GetUpdateLoginProfileHeaders
}

type GetUpdateLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
