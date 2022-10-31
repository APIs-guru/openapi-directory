package operations

type PostChangePasswordActionEnum string

const (
	PostChangePasswordActionEnumChangePassword PostChangePasswordActionEnum = "ChangePassword"
)

type PostChangePasswordVersionEnum string

const (
	PostChangePasswordVersionEnumTwoThousandAndTen0508 PostChangePasswordVersionEnum = "2010-05-08"
)

type PostChangePasswordQueryParams struct {
	Action  PostChangePasswordActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostChangePasswordVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostChangePasswordHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostChangePasswordRequest struct {
	QueryParams PostChangePasswordQueryParams
	Headers     PostChangePasswordHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostChangePasswordResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
