package operations

type GetDeleteUserPermissionsBoundaryActionEnum string

const (
	GetDeleteUserPermissionsBoundaryActionEnumDeleteUserPermissionsBoundary GetDeleteUserPermissionsBoundaryActionEnum = "DeleteUserPermissionsBoundary"
)

type GetDeleteUserPermissionsBoundaryVersionEnum string

const (
	GetDeleteUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508 GetDeleteUserPermissionsBoundaryVersionEnum = "2010-05-08"
)

type GetDeleteUserPermissionsBoundaryQueryParams struct {
	Action   GetDeleteUserPermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserName string                                      `queryParam:"style=form,explode=true,name=UserName"`
	Version  GetDeleteUserPermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteUserPermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteUserPermissionsBoundaryRequest struct {
	QueryParams GetDeleteUserPermissionsBoundaryQueryParams
	Headers     GetDeleteUserPermissionsBoundaryHeaders
}

type GetDeleteUserPermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
