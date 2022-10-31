package operations

type GetCreateLoginProfileActionEnum string

const (
	GetCreateLoginProfileActionEnumCreateLoginProfile GetCreateLoginProfileActionEnum = "CreateLoginProfile"
)

type GetCreateLoginProfileVersionEnum string

const (
	GetCreateLoginProfileVersionEnumTwoThousandAndTen0508 GetCreateLoginProfileVersionEnum = "2010-05-08"
)

type GetCreateLoginProfileQueryParams struct {
	Action                GetCreateLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Password              string                           `queryParam:"style=form,explode=true,name=Password"`
	PasswordResetRequired *bool                            `queryParam:"style=form,explode=true,name=PasswordResetRequired"`
	UserName              string                           `queryParam:"style=form,explode=true,name=UserName"`
	Version               GetCreateLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateLoginProfileRequest struct {
	QueryParams GetCreateLoginProfileQueryParams
	Headers     GetCreateLoginProfileHeaders
}

type GetCreateLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
