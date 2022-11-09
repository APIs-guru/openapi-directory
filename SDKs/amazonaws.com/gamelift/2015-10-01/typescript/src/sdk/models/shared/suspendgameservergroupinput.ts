import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";


export class SuspendGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=SuspendActions" })
  suspendActions: GameServerGroupActionEnum[];
}
