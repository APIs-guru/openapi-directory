import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterGameServerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerId" })
  gameServerId: string;
}
