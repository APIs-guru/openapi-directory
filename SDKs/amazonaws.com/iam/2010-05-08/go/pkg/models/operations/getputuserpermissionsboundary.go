package operations

type GetPutUserPermissionsBoundaryActionEnum string

const (
	GetPutUserPermissionsBoundaryActionEnumPutUserPermissionsBoundary GetPutUserPermissionsBoundaryActionEnum = "PutUserPermissionsBoundary"
)

type GetPutUserPermissionsBoundaryVersionEnum string

const (
	GetPutUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508 GetPutUserPermissionsBoundaryVersionEnum = "2010-05-08"
)

type GetPutUserPermissionsBoundaryQueryParams struct {
	Action              GetPutUserPermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PermissionsBoundary string                                   `queryParam:"style=form,explode=true,name=PermissionsBoundary"`
	UserName            string                                   `queryParam:"style=form,explode=true,name=UserName"`
	Version             GetPutUserPermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutUserPermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPutUserPermissionsBoundaryRequest struct {
	QueryParams GetPutUserPermissionsBoundaryQueryParams
	Headers     GetPutUserPermissionsBoundaryHeaders
}

type GetPutUserPermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
