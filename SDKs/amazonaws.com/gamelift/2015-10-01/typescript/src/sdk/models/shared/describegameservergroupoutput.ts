import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroup } from "./gameservergroup";



export class DescribeGameServerGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroup" })
  gameServerGroup?: GameServerGroup;
}
