import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSession } from "./gamesession";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";


// GameSessionDetail
/** 
 * A game session's properties plus the protection policy currently in force.
**/
export class GameSessionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSession" })
  gameSession?: GameSession;

  @Metadata({ data: "json, name=ProtectionPolicy" })
  protectionPolicy?: ProtectionPolicyEnum;
}
