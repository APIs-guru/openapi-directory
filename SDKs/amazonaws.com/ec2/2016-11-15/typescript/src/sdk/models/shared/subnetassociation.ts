import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulitcastDomainAssociationStateEnum } from "./transitgatewaymulitcastdomainassociationstateenum";



// SubnetAssociation
/** 
 * Describes the subnet association with the transit gateway multicast domain.
**/
export class SubnetAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: TransitGatewayMulitcastDomainAssociationStateEnum;

  @SpeakeasyMetadata()
  subnetId?: string;
}
