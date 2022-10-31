package operations

type GetDeleteNetworkInterfaceActionEnum string

const (
	GetDeleteNetworkInterfaceActionEnumDeleteNetworkInterface GetDeleteNetworkInterfaceActionEnum = "DeleteNetworkInterface"
)

type GetDeleteNetworkInterfaceVersionEnum string

const (
	GetDeleteNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkInterfaceVersionEnum = "2016-11-15"
)

type GetDeleteNetworkInterfaceQueryParams struct {
	Action             GetDeleteNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkInterfaceID string                               `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	Version            GetDeleteNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteNetworkInterfaceRequest struct {
	QueryParams GetDeleteNetworkInterfaceQueryParams
	Headers     GetDeleteNetworkInterfaceHeaders
}

type GetDeleteNetworkInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
