import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalTable } from "./globaltable";


export class ListGlobalTablesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTables", elemType: shared.GlobalTable })
  globalTables?: GlobalTable[];

  @Metadata({ data: "json, name=LastEvaluatedGlobalTableName" })
  lastEvaluatedGlobalTableName?: string;
}
