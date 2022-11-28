import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";



export class DescribeGameServerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServer" })
  gameServer?: GameServer;
}
