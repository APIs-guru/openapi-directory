import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerGroupDeleteOptionEnum } from "./gameservergroupdeleteoptionenum";


export class DeleteGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteOption" })
  deleteOption?: GameServerGroupDeleteOptionEnum;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;
}
