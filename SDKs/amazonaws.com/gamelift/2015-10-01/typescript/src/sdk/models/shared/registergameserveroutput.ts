import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";



export class RegisterGameServerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
