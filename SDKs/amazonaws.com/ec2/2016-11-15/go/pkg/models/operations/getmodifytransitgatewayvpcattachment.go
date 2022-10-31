package operations

import (
	"openapi/pkg/models/shared"
)

type GetModifyTransitGatewayVpcAttachmentActionEnum string

const (
	GetModifyTransitGatewayVpcAttachmentActionEnumModifyTransitGatewayVpcAttachment GetModifyTransitGatewayVpcAttachmentActionEnum = "ModifyTransitGatewayVpcAttachment"
)

type GetModifyTransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport *shared.ApplianceModeSupportValueEnum `queryParam:"name=ApplianceModeSupport"`
	DNSSupport           *shared.DNSSupportValueEnum           `queryParam:"name=DnsSupport"`
	Ipv6Support          *shared.Ipv6SupportValueEnum          `queryParam:"name=Ipv6Support"`
}

type GetModifyTransitGatewayVpcAttachmentVersionEnum string

const (
	GetModifyTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 GetModifyTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type GetModifyTransitGatewayVpcAttachmentQueryParams struct {
	Action                     GetModifyTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AddSubnetIds               []string                                        `queryParam:"style=form,explode=true,name=AddSubnetIds"`
	DryRun                     *bool                                           `queryParam:"style=form,explode=true,name=DryRun"`
	Options                    *GetModifyTransitGatewayVpcAttachmentOptions    `queryParam:"style=form,explode=true,name=Options"`
	RemoveSubnetIds            []string                                        `queryParam:"style=form,explode=true,name=RemoveSubnetIds"`
	TransitGatewayAttachmentID string                                          `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetModifyTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyTransitGatewayVpcAttachmentRequest struct {
	QueryParams GetModifyTransitGatewayVpcAttachmentQueryParams
	Headers     GetModifyTransitGatewayVpcAttachmentHeaders
}

type GetModifyTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
