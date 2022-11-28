import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
