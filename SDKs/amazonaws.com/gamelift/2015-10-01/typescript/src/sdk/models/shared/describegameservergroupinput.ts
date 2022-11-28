import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeGameServerGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;
}
