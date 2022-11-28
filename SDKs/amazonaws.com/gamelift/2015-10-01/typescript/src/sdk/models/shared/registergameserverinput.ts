import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterGameServerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionInfo" })
  connectionInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerId" })
  gameServerId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
