import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageDescriptor } from "./storagedescriptor";


// Partition
/** 
 * Represents a slice of table data.
**/
export class Partition extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @Metadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
