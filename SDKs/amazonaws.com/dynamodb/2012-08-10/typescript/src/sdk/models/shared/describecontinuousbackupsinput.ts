import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeContinuousBackupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
