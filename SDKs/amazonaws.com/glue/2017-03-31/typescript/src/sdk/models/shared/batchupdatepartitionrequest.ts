import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchUpdatePartitionRequestEntry } from "./batchupdatepartitionrequestentry";


export class BatchUpdatePartitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Entries", elemType: shared.BatchUpdatePartitionRequestEntry })
  entries: BatchUpdatePartitionRequestEntry[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
