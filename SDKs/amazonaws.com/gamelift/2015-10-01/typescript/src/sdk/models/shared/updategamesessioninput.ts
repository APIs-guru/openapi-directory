import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";


// UpdateGameSessionInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateGameSessionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PlayerSessionCreationPolicy" })
  playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;

  @Metadata({ data: "json, name=ProtectionPolicy" })
  protectionPolicy?: ProtectionPolicyEnum;
}
