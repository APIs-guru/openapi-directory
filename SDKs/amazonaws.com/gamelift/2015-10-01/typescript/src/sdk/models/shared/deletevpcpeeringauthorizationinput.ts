import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteVpcPeeringAuthorizationInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteVpcPeeringAuthorizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameLiftAwsAccountId" })
  gameLiftAwsAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcId" })
  peerVpcId: string;
}
