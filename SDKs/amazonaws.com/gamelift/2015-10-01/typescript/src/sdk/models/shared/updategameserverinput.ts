import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerHealthCheckEnum } from "./gameserverhealthcheckenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";



export class UpdateGameServerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerId" })
  gameServerId: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheck" })
  healthCheck?: GameServerHealthCheckEnum;

  @SpeakeasyMetadata({ data: "json, name=UtilizationStatus" })
  utilizationStatus?: GameServerUtilizationStatusEnum;
}
