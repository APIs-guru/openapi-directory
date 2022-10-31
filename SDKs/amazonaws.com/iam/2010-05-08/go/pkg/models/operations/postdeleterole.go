package operations

type PostDeleteRoleActionEnum string

const (
	PostDeleteRoleActionEnumDeleteRole PostDeleteRoleActionEnum = "DeleteRole"
)

type PostDeleteRoleVersionEnum string

const (
	PostDeleteRoleVersionEnumTwoThousandAndTen0508 PostDeleteRoleVersionEnum = "2010-05-08"
)

type PostDeleteRoleQueryParams struct {
	Action  PostDeleteRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteRoleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteRoleRequest struct {
	QueryParams PostDeleteRoleQueryParams
	Headers     PostDeleteRoleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
