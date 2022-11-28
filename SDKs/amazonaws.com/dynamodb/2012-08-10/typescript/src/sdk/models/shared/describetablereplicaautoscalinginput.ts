import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTableReplicaAutoScalingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
