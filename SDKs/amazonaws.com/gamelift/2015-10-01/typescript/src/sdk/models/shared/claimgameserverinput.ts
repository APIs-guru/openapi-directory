import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimGameServerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerId" })
  gameServerId?: string;
}
