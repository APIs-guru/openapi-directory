import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDomainOptions } from "./transitgatewaymulticastdomainoptions";
import { TransitGatewayMulticastDomainStateEnum } from "./transitgatewaymulticastdomainstateenum";
import { Tag } from "./tag";



// TransitGatewayMulticastDomain
/** 
 * Describes the transit gateway multicast domain.
**/
export class TransitGatewayMulticastDomain extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  options?: TransitGatewayMulticastDomainOptions;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: TransitGatewayMulticastDomainStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainArn?: string;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
