import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalTable } from "./globaltable";



export class ListGlobalTablesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTables", elemType: GlobalTable })
  globalTables?: GlobalTable[];

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedGlobalTableName" })
  lastEvaluatedGlobalTableName?: string;
}
