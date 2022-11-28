import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { StorageDescriptor } from "./storagedescriptor";
import { TableIdentifier } from "./tableidentifier";



// TableInput
/** 
 * A structure used to define a table.
**/
export class TableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PartitionKeys", elemType: Column })
  partitionKeys?: Column[];

  @SpeakeasyMetadata({ data: "json, name=Retention" })
  retention?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @SpeakeasyMetadata({ data: "json, name=TableType" })
  tableType?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetTable" })
  targetTable?: TableIdentifier;

  @SpeakeasyMetadata({ data: "json, name=ViewExpandedText" })
  viewExpandedText?: string;

  @SpeakeasyMetadata({ data: "json, name=ViewOriginalText" })
  viewOriginalText?: string;
}
