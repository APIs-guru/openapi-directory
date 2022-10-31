package operations

type GetDisassociateTransitGatewayMulticastDomainActionEnum string

const (
	GetDisassociateTransitGatewayMulticastDomainActionEnumDisassociateTransitGatewayMulticastDomain GetDisassociateTransitGatewayMulticastDomainActionEnum = "DisassociateTransitGatewayMulticastDomain"
)

type GetDisassociateTransitGatewayMulticastDomainVersionEnum string

const (
	GetDisassociateTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 GetDisassociateTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type GetDisassociateTransitGatewayMulticastDomainQueryParams struct {
	Action                          GetDisassociateTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                          *bool                                                   `queryParam:"style=form,explode=true,name=DryRun"`
	SubnetIds                       []string                                                `queryParam:"style=form,explode=true,name=SubnetIds"`
	TransitGatewayAttachmentID      *string                                                 `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayMulticastDomainID *string                                                 `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
	Version                         GetDisassociateTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisassociateTransitGatewayMulticastDomainRequest struct {
	QueryParams GetDisassociateTransitGatewayMulticastDomainQueryParams
	Headers     GetDisassociateTransitGatewayMulticastDomainHeaders
}

type GetDisassociateTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
