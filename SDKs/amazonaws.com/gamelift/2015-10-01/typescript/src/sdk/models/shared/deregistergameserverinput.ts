import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterGameServerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerId" })
  gameServerId: string;
}
