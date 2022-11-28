import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";



// UpdateGameSessionInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateGameSessionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessionCreationPolicy" })
  playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=ProtectionPolicy" })
  protectionPolicy?: ProtectionPolicyEnum;
}
