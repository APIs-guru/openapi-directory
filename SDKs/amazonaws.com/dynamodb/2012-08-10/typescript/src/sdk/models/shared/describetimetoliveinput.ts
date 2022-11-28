import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTimeToLiveInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
