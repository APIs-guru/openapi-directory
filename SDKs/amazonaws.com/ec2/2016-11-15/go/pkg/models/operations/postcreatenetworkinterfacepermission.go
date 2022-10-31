package operations

type PostCreateNetworkInterfacePermissionActionEnum string

const (
	PostCreateNetworkInterfacePermissionActionEnumCreateNetworkInterfacePermission PostCreateNetworkInterfacePermissionActionEnum = "CreateNetworkInterfacePermission"
)

type PostCreateNetworkInterfacePermissionVersionEnum string

const (
	PostCreateNetworkInterfacePermissionVersionEnumTwoThousandAndSixteen1115 PostCreateNetworkInterfacePermissionVersionEnum = "2016-11-15"
)

type PostCreateNetworkInterfacePermissionQueryParams struct {
	Action  PostCreateNetworkInterfacePermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateNetworkInterfacePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateNetworkInterfacePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateNetworkInterfacePermissionRequest struct {
	QueryParams PostCreateNetworkInterfacePermissionQueryParams
	Headers     PostCreateNetworkInterfacePermissionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateNetworkInterfacePermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
