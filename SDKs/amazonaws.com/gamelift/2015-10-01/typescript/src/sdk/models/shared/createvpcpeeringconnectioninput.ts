import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcPeeringConnectionInput
/** 
 * Represents the input for a request operation.
**/
export class CreateVpcPeeringConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcAwsAccountId" })
  peerVpcAwsAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
