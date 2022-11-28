import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchUpdatePartitionRequestEntry } from "./batchupdatepartitionrequestentry";



export class BatchUpdatePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: BatchUpdatePartitionRequestEntry })
  entries: BatchUpdatePartitionRequestEntry[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
