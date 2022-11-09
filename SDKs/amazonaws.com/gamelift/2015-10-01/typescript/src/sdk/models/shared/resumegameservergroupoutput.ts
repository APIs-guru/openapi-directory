import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerGroup } from "./gameservergroup";


export class ResumeGameServerGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroup" })
  gameServerGroup?: GameServerGroup;
}
