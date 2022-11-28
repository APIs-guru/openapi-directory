import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcPeeringAuthorizationInput
/** 
 * Represents the input for a request operation.
**/
export class CreateVpcPeeringAuthorizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameLiftAwsAccountId" })
  gameLiftAwsAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
