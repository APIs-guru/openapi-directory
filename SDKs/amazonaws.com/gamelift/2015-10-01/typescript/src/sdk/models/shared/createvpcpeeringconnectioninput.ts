import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateVpcPeeringConnectionInput
/** 
 * Represents the input for a request operation.
**/
export class CreateVpcPeeringConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=PeerVpcAwsAccountId" })
  peerVpcAwsAccountId: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
