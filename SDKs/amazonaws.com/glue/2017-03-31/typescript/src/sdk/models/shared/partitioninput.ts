import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageDescriptor } from "./storagedescriptor";


// PartitionInput
/** 
 * The structure used to create and update a partition.
**/
export class PartitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @Metadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
