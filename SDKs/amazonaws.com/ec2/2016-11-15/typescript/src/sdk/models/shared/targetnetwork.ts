import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";



// TargetNetwork
/** 
 * Describes a target network associated with a Client VPN endpoint.
**/
export class TargetNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  clientVpnEndpointId?: string;

  @SpeakeasyMetadata()
  securityGroups?: string[];

  @SpeakeasyMetadata()
  status?: AssociationStatus;

  @SpeakeasyMetadata()
  targetNetworkId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
