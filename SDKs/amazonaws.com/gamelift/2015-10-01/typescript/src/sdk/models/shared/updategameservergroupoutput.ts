import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroup } from "./gameservergroup";



export class UpdateGameServerGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroup" })
  gameServerGroup?: GameServerGroup;
}
