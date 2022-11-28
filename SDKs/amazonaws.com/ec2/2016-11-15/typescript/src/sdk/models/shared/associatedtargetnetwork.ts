import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedNetworkTypeEnum } from "./associatednetworktypeenum";



// AssociatedTargetNetwork
/** 
 * Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
**/
export class AssociatedTargetNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkId?: string;

  @SpeakeasyMetadata()
  networkType?: AssociatedNetworkTypeEnum;
}
