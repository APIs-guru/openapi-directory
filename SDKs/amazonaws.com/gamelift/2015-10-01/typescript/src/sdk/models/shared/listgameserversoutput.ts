import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";



export class ListGameServersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServers", elemType: GameServer })
  gameServers?: GameServer[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
