import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoAcceptSharedAttachmentsValueEnum } from "./autoacceptsharedattachmentsvalueenum";
import { DefaultRouteTableAssociationValueEnum } from "./defaultroutetableassociationvalueenum";
import { DefaultRouteTablePropagationValueEnum } from "./defaultroutetablepropagationvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { MulticastSupportValueEnum } from "./multicastsupportvalueenum";
import { VpnEcmpSupportValueEnum } from "./vpnecmpsupportvalueenum";



// TransitGatewayOptions
/** 
 * Describes the options for a transit gateway.
**/
export class TransitGatewayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amazonSideAsn?: number;

  @SpeakeasyMetadata()
  associationDefaultRouteTableId?: string;

  @SpeakeasyMetadata()
  autoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValueEnum;

  @SpeakeasyMetadata()
  defaultRouteTableAssociation?: DefaultRouteTableAssociationValueEnum;

  @SpeakeasyMetadata()
  defaultRouteTablePropagation?: DefaultRouteTablePropagationValueEnum;

  @SpeakeasyMetadata()
  dnsSupport?: DnsSupportValueEnum;

  @SpeakeasyMetadata()
  multicastSupport?: MulticastSupportValueEnum;

  @SpeakeasyMetadata()
  propagationDefaultRouteTableId?: string;

  @SpeakeasyMetadata()
  transitGatewayCidrBlocks?: string[];

  @SpeakeasyMetadata()
  vpnEcmpSupport?: VpnEcmpSupportValueEnum;
}
