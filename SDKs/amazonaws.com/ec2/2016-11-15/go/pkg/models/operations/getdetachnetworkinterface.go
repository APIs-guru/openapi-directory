package operations

type GetDetachNetworkInterfaceActionEnum string

const (
	GetDetachNetworkInterfaceActionEnumDetachNetworkInterface GetDetachNetworkInterfaceActionEnum = "DetachNetworkInterface"
)

type GetDetachNetworkInterfaceVersionEnum string

const (
	GetDetachNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 GetDetachNetworkInterfaceVersionEnum = "2016-11-15"
)

type GetDetachNetworkInterfaceQueryParams struct {
	Action       GetDetachNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AttachmentID string                               `queryParam:"style=form,explode=true,name=AttachmentId"`
	DryRun       *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	Force        *bool                                `queryParam:"style=form,explode=true,name=Force"`
	Version      GetDetachNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDetachNetworkInterfaceRequest struct {
	QueryParams GetDetachNetworkInterfaceQueryParams
	Headers     GetDetachNetworkInterfaceHeaders
}

type GetDetachNetworkInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
