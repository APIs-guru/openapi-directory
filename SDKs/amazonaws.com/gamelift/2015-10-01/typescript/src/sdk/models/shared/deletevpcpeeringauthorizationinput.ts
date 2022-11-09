import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteVpcPeeringAuthorizationInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteVpcPeeringAuthorizationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameLiftAwsAccountId" })
  gameLiftAwsAccountId: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
