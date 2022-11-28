import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroup } from "./gameservergroup";



export class ListGameServerGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroups", elemType: GameServerGroup })
  gameServerGroups?: GameServerGroup[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
