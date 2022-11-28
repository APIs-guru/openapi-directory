import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTablesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedTableName" })
  lastEvaluatedTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableNames" })
  tableNames?: string[];
}
