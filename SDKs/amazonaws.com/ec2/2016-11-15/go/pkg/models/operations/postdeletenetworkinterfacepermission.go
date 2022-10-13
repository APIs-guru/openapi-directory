package operations

type PostDeleteNetworkInterfacePermissionActionEnum string

const (
	PostDeleteNetworkInterfacePermissionActionEnumDeleteNetworkInterfacePermission PostDeleteNetworkInterfacePermissionActionEnum = "DeleteNetworkInterfacePermission"
)

type PostDeleteNetworkInterfacePermissionVersionEnum string

const (
	PostDeleteNetworkInterfacePermissionVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkInterfacePermissionVersionEnum = "2016-11-15"
)

type PostDeleteNetworkInterfacePermissionQueryParams struct {
	Action  PostDeleteNetworkInterfacePermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteNetworkInterfacePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteNetworkInterfacePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteNetworkInterfacePermissionRequest struct {
	QueryParams PostDeleteNetworkInterfacePermissionQueryParams
	Headers     PostDeleteNetworkInterfacePermissionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteNetworkInterfacePermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
