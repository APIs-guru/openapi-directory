import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";
export declare class ResumeGameServerGroupInput extends SpeakeasyBase {
    gameServerGroupName: string;
    resumeActions: GameServerGroupActionEnum[];
}
