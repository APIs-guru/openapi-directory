package operations

type GetDeleteNetworkInterfacePermissionActionEnum string

const (
	GetDeleteNetworkInterfacePermissionActionEnumDeleteNetworkInterfacePermission GetDeleteNetworkInterfacePermissionActionEnum = "DeleteNetworkInterfacePermission"
)

type GetDeleteNetworkInterfacePermissionVersionEnum string

const (
	GetDeleteNetworkInterfacePermissionVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkInterfacePermissionVersionEnum = "2016-11-15"
)

type GetDeleteNetworkInterfacePermissionQueryParams struct {
	Action                       GetDeleteNetworkInterfacePermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                       *bool                                          `queryParam:"style=form,explode=true,name=DryRun"`
	Force                        *bool                                          `queryParam:"style=form,explode=true,name=Force"`
	NetworkInterfacePermissionID string                                         `queryParam:"style=form,explode=true,name=NetworkInterfacePermissionId"`
	Version                      GetDeleteNetworkInterfacePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteNetworkInterfacePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteNetworkInterfacePermissionRequest struct {
	QueryParams GetDeleteNetworkInterfacePermissionQueryParams
	Headers     GetDeleteNetworkInterfacePermissionHeaders
}

type GetDeleteNetworkInterfacePermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
