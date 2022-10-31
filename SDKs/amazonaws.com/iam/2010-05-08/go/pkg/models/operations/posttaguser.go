package operations

type PostTagUserActionEnum string

const (
	PostTagUserActionEnumTagUser PostTagUserActionEnum = "TagUser"
)

type PostTagUserVersionEnum string

const (
	PostTagUserVersionEnumTwoThousandAndTen0508 PostTagUserVersionEnum = "2010-05-08"
)

type PostTagUserQueryParams struct {
	Action  PostTagUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagUserHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTagUserRequest struct {
	QueryParams PostTagUserQueryParams
	Headers     PostTagUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
