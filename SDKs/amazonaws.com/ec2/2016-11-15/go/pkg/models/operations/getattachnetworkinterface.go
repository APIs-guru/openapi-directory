package operations

type GetAttachNetworkInterfaceActionEnum string

const (
	GetAttachNetworkInterfaceActionEnumAttachNetworkInterface GetAttachNetworkInterfaceActionEnum = "AttachNetworkInterface"
)

type GetAttachNetworkInterfaceVersionEnum string

const (
	GetAttachNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 GetAttachNetworkInterfaceVersionEnum = "2016-11-15"
)

type GetAttachNetworkInterfaceQueryParams struct {
	Action             GetAttachNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DeviceIndex        int64                                `queryParam:"style=form,explode=true,name=DeviceIndex"`
	DryRun             *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID         string                               `queryParam:"style=form,explode=true,name=InstanceId"`
	NetworkCardIndex   *int64                               `queryParam:"style=form,explode=true,name=NetworkCardIndex"`
	NetworkInterfaceID string                               `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	Version            GetAttachNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAttachNetworkInterfaceRequest struct {
	QueryParams GetAttachNetworkInterfaceQueryParams
	Headers     GetAttachNetworkInterfaceHeaders
}

type GetAttachNetworkInterfaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
