import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetModifyTransitGatewayActionEnum {
    ModifyTransitGateway = "ModifyTransitGateway"
}
/**
 * The transit gateway options.
**/
export declare class GetModifyTransitGatewayOptions extends SpeakeasyBase {
    addTransitGatewayCidrBlocks?: string[];
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: shared.AutoAcceptSharedAttachmentsValueEnum;
    defaultRouteTableAssociation?: shared.DefaultRouteTableAssociationValueEnum;
    defaultRouteTablePropagation?: shared.DefaultRouteTablePropagationValueEnum;
    dnsSupport?: shared.DnsSupportValueEnum;
    propagationDefaultRouteTableId?: string;
    removeTransitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: shared.VpnEcmpSupportValueEnum;
}
export declare enum GetModifyTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTransitGatewayQueryParams extends SpeakeasyBase {
    action: GetModifyTransitGatewayActionEnum;
    description?: string;
    dryRun?: boolean;
    options?: GetModifyTransitGatewayOptions;
    transitGatewayId: string;
    version: GetModifyTransitGatewayVersionEnum;
}
export declare class GetModifyTransitGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTransitGatewayRequest extends SpeakeasyBase {
    queryParams: GetModifyTransitGatewayQueryParams;
    headers: GetModifyTransitGatewayHeaders;
}
export declare class GetModifyTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
