import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";



export class ClaimGameServerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
