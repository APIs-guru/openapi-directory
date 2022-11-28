import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";



export class UpdateGameServerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
