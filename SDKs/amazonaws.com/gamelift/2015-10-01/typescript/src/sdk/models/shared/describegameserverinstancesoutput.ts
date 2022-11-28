import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerInstance } from "./gameserverinstance";



export class DescribeGameServerInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerInstances", elemType: GameServerInstance })
  gameServerInstances?: GameServerInstance[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
