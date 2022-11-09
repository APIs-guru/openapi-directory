import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateVpcPeeringAuthorizationInput
/** 
 * Represents the input for a request operation.
**/
export class CreateVpcPeeringAuthorizationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameLiftAwsAccountId" })
  gameLiftAwsAccountId: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
