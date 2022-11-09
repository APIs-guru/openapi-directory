import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameServerInstance } from "./gameserverinstance";


export class DescribeGameServerInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerInstances", elemType: shared.GameServerInstance })
  gameServerInstances?: GameServerInstance[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
