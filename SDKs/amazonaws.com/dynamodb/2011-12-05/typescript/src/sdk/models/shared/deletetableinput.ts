import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
