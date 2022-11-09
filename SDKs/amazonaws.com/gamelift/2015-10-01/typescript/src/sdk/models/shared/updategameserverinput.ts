import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerHealthCheckEnum } from "./gameserverhealthcheckenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";


export class UpdateGameServerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerId" })
  gameServerId: string;

  @Metadata({ data: "json, name=HealthCheck" })
  healthCheck?: GameServerHealthCheckEnum;

  @Metadata({ data: "json, name=UtilizationStatus" })
  utilizationStatus?: GameServerUtilizationStatusEnum;
}
