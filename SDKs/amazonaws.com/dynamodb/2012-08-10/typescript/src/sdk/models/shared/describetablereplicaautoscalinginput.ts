import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTableReplicaAutoScalingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
