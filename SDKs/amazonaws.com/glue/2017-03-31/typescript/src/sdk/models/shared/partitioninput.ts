import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageDescriptor } from "./storagedescriptor";



// PartitionInput
/** 
 * The structure used to create and update a partition.
**/
export class PartitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
