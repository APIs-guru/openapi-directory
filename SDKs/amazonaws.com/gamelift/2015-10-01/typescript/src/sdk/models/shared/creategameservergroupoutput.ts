import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroup } from "./gameservergroup";



export class CreateGameServerGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroup" })
  gameServerGroup?: GameServerGroup;
}
