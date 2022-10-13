package operations

type GetCreateNetworkInterfacePermissionActionEnum string

const (
	GetCreateNetworkInterfacePermissionActionEnumCreateNetworkInterfacePermission GetCreateNetworkInterfacePermissionActionEnum = "CreateNetworkInterfacePermission"
)

type GetCreateNetworkInterfacePermissionPermissionEnum string

const (
	GetCreateNetworkInterfacePermissionPermissionEnumInstanceAttach GetCreateNetworkInterfacePermissionPermissionEnum = "INSTANCE-ATTACH"
	GetCreateNetworkInterfacePermissionPermissionEnumEipAssociate   GetCreateNetworkInterfacePermissionPermissionEnum = "EIP-ASSOCIATE"
)

type GetCreateNetworkInterfacePermissionVersionEnum string

const (
	GetCreateNetworkInterfacePermissionVersionEnumTwoThousandAndSixteen1115 GetCreateNetworkInterfacePermissionVersionEnum = "2016-11-15"
)

type GetCreateNetworkInterfacePermissionQueryParams struct {
	Action             GetCreateNetworkInterfacePermissionActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	AwsAccountID       *string                                           `queryParam:"style=form,explode=true,name=AwsAccountId"`
	AwsService         *string                                           `queryParam:"style=form,explode=true,name=AwsService"`
	DryRun             *bool                                             `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkInterfaceID string                                            `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	Permission         GetCreateNetworkInterfacePermissionPermissionEnum `queryParam:"style=form,explode=true,name=Permission"`
	Version            GetCreateNetworkInterfacePermissionVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateNetworkInterfacePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateNetworkInterfacePermissionRequest struct {
	QueryParams GetCreateNetworkInterfacePermissionQueryParams
	Headers     GetCreateNetworkInterfacePermissionHeaders
}

type GetCreateNetworkInterfacePermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
