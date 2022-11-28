import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupDeleteOptionEnum } from "./gameservergroupdeleteoptionenum";
export declare class DeleteGameServerGroupInput extends SpeakeasyBase {
    deleteOption?: GameServerGroupDeleteOptionEnum;
    gameServerGroupName: string;
}
