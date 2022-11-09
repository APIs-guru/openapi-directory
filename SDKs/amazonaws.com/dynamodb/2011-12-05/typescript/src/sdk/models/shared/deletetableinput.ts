import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
