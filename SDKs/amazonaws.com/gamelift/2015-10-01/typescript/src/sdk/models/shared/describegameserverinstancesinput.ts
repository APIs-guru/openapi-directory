import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGameServerInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
