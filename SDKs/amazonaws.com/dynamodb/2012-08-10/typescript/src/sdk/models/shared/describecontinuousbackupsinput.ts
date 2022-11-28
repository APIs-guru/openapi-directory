import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeContinuousBackupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
