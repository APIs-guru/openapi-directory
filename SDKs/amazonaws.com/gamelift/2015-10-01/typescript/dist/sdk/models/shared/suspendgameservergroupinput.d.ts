import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";
export declare class SuspendGameServerGroupInput extends SpeakeasyBase {
    gameServerGroupName: string;
    suspendActions: GameServerGroupActionEnum[];
}
