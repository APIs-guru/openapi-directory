package operations

type PostDeleteUserPermissionsBoundaryActionEnum string

const (
	PostDeleteUserPermissionsBoundaryActionEnumDeleteUserPermissionsBoundary PostDeleteUserPermissionsBoundaryActionEnum = "DeleteUserPermissionsBoundary"
)

type PostDeleteUserPermissionsBoundaryVersionEnum string

const (
	PostDeleteUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508 PostDeleteUserPermissionsBoundaryVersionEnum = "2010-05-08"
)

type PostDeleteUserPermissionsBoundaryQueryParams struct {
	Action  PostDeleteUserPermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteUserPermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteUserPermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteUserPermissionsBoundaryRequest struct {
	QueryParams PostDeleteUserPermissionsBoundaryQueryParams
	Headers     PostDeleteUserPermissionsBoundaryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteUserPermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
