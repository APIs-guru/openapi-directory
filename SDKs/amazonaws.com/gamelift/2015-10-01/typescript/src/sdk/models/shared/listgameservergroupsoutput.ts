import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameServerGroup } from "./gameservergroup";


export class ListGameServerGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroups", elemType: shared.GameServerGroup })
  gameServerGroups?: GameServerGroup[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
