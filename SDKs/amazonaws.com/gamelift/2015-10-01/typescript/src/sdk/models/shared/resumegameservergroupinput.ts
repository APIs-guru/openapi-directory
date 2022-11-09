import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";


export class ResumeGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=ResumeActions" })
  resumeActions: GameServerGroupActionEnum[];
}
