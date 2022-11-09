import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClaimGameServerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerId" })
  gameServerId?: string;
}
