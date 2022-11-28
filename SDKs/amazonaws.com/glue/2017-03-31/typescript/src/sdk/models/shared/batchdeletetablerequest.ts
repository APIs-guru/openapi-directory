import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDeleteTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TablesToDelete" })
  tablesToDelete: string[];
}
