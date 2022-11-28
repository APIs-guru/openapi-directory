import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupDeleteOptionEnum } from "./gameservergroupdeleteoptionenum";



export class DeleteGameServerGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteOption" })
  deleteOption?: GameServerGroupDeleteOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;
}
