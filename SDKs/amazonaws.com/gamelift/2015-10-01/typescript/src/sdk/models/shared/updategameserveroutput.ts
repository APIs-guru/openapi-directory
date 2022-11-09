import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServer } from "./gameserver";


export class UpdateGameServerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
