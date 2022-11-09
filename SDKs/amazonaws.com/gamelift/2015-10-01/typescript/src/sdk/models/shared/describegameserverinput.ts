import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGameServerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=GameServerId" })
  gameServerId: string;
}
