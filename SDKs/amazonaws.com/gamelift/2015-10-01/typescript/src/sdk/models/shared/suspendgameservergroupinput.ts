import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";



export class SuspendGameServerGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=SuspendActions" })
  suspendActions: GameServerGroupActionEnum[];
}
