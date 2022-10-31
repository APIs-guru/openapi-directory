package operations

import (
"openapi/pkg/models/shared")


type GetModifyTransitGatewayActionEnum string

const (
    GetModifyTransitGatewayActionEnumModifyTransitGateway GetModifyTransitGatewayActionEnum = "ModifyTransitGateway"
)


type GetModifyTransitGatewayOptions struct {
    AddTransitGatewayCidrBlocks []string `queryParam:"name=AddTransitGatewayCidrBlocks"`
    AssociationDefaultRouteTableID *string `queryParam:"name=AssociationDefaultRouteTableId"`
    AutoAcceptSharedAttachments *shared.AutoAcceptSharedAttachmentsValueEnum `queryParam:"name=AutoAcceptSharedAttachments"`
    DefaultRouteTableAssociation *shared.DefaultRouteTableAssociationValueEnum `queryParam:"name=DefaultRouteTableAssociation"`
    DefaultRouteTablePropagation *shared.DefaultRouteTablePropagationValueEnum `queryParam:"name=DefaultRouteTablePropagation"`
    DNSSupport *shared.DNSSupportValueEnum `queryParam:"name=DnsSupport"`
    PropagationDefaultRouteTableID *string `queryParam:"name=PropagationDefaultRouteTableId"`
    RemoveTransitGatewayCidrBlocks []string `queryParam:"name=RemoveTransitGatewayCidrBlocks"`
    VpnEcmpSupport *shared.VpnEcmpSupportValueEnum `queryParam:"name=VpnEcmpSupport"`
    
}


type GetModifyTransitGatewayVersionEnum string

const (
    GetModifyTransitGatewayVersionEnumTwoThousandAndSixteen1115 GetModifyTransitGatewayVersionEnum = "2016-11-15"
)


type GetModifyTransitGatewayQueryParams struct {
    Action GetModifyTransitGatewayActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Options *GetModifyTransitGatewayOptions `queryParam:"style=form,explode=true,name=Options"`
    TransitGatewayID string `queryParam:"style=form,explode=true,name=TransitGatewayId"`
    Version GetModifyTransitGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyTransitGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyTransitGatewayRequest struct {
    QueryParams GetModifyTransitGatewayQueryParams 
    Headers GetModifyTransitGatewayHeaders 
    
}

type GetModifyTransitGatewayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

