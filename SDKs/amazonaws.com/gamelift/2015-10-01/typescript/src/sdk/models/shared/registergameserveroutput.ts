import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServer } from "./gameserver";


export class RegisterGameServerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
