import { SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAttachmentsValueEnum } from "./autoacceptsharedattachmentsvalueenum";
import { DefaultRouteTableAssociationValueEnum } from "./defaultroutetableassociationvalueenum";
import { DefaultRouteTablePropagationValueEnum } from "./defaultroutetablepropagationvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { MulticastSupportValueEnum } from "./multicastsupportvalueenum";
import { VpnEcmpSupportValueEnum } from "./vpnecmpsupportvalueenum";
/**
 * Describes the options for a transit gateway.
**/
export declare class TransitGatewayOptions extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValueEnum;
    defaultRouteTableAssociation?: DefaultRouteTableAssociationValueEnum;
    defaultRouteTablePropagation?: DefaultRouteTablePropagationValueEnum;
    dnsSupport?: DnsSupportValueEnum;
    multicastSupport?: MulticastSupportValueEnum;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: VpnEcmpSupportValueEnum;
}
