import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGameServerGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;
}
