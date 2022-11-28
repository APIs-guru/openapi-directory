import { SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";
export declare class ListGameServersOutput extends SpeakeasyBase {
    gameServers?: GameServer[];
    nextToken?: string;
}
