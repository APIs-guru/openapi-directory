import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
