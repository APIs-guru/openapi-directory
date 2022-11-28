import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";



// GameSessionDetail
/** 
 * A game session's properties plus the protection policy currently in force.
**/
export class GameSessionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSession" })
  gameSession?: GameSession;

  @SpeakeasyMetadata({ data: "json, name=ProtectionPolicy" })
  protectionPolicy?: ProtectionPolicyEnum;
}
