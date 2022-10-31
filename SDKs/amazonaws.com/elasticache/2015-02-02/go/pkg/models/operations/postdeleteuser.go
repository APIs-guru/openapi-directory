package operations

type PostDeleteUserActionEnum string

const (
	PostDeleteUserActionEnumDeleteUser PostDeleteUserActionEnum = "DeleteUser"
)

type PostDeleteUserVersionEnum string

const (
	PostDeleteUserVersionEnumTwoThousandAndFifteen0202 PostDeleteUserVersionEnum = "2015-02-02"
)

type PostDeleteUserQueryParams struct {
	Action  PostDeleteUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteUserHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteUserRequest struct {
	QueryParams PostDeleteUserQueryParams
	Headers     PostDeleteUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
