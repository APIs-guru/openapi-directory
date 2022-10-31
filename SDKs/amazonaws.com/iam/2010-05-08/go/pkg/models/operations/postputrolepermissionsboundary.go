package operations

type PostPutRolePermissionsBoundaryActionEnum string

const (
	PostPutRolePermissionsBoundaryActionEnumPutRolePermissionsBoundary PostPutRolePermissionsBoundaryActionEnum = "PutRolePermissionsBoundary"
)

type PostPutRolePermissionsBoundaryVersionEnum string

const (
	PostPutRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508 PostPutRolePermissionsBoundaryVersionEnum = "2010-05-08"
)

type PostPutRolePermissionsBoundaryQueryParams struct {
	Action  PostPutRolePermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutRolePermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutRolePermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutRolePermissionsBoundaryRequest struct {
	QueryParams PostPutRolePermissionsBoundaryQueryParams
	Headers     PostPutRolePermissionsBoundaryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutRolePermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
