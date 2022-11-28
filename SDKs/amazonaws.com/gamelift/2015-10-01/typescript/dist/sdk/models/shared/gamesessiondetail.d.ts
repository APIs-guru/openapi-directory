import { SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
/**
 * A game session's properties plus the protection policy currently in force.
**/
export declare class GameSessionDetail extends SpeakeasyBase {
    gameSession?: GameSession;
    protectionPolicy?: ProtectionPolicyEnum;
}
