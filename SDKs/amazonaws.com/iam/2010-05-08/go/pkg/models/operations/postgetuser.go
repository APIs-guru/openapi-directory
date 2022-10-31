package operations

type PostGetUserActionEnum string

const (
	PostGetUserActionEnumGetUser PostGetUserActionEnum = "GetUser"
)

type PostGetUserVersionEnum string

const (
	PostGetUserVersionEnumTwoThousandAndTen0508 PostGetUserVersionEnum = "2010-05-08"
)

type PostGetUserQueryParams struct {
	Action  PostGetUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetUserHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetUserRequest struct {
	QueryParams PostGetUserQueryParams
	Headers     PostGetUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
