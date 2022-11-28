import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageDescriptor } from "./storagedescriptor";



// Partition
/** 
 * Represents a slice of table data.
**/
export class Partition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
