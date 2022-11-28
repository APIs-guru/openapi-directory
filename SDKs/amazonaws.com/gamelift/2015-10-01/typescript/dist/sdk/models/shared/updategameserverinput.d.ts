import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerHealthCheckEnum } from "./gameserverhealthcheckenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";
export declare class UpdateGameServerInput extends SpeakeasyBase {
    gameServerData?: string;
    gameServerGroupName: string;
    gameServerId: string;
    healthCheck?: GameServerHealthCheckEnum;
    utilizationStatus?: GameServerUtilizationStatusEnum;
}
