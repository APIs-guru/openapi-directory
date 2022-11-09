import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameServer } from "./gameserver";


export class ListGameServersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServers", elemType: shared.GameServer })
  gameServers?: GameServer[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
