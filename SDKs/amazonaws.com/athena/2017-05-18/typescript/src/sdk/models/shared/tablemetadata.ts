import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";



// TableMetadata
/** 
 * Contains metadata for a table.
**/
export class TableMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Columns", elemType: Column })
  columns?: Column[];

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PartitionKeys", elemType: Column })
  partitionKeys?: Column[];

  @SpeakeasyMetadata({ data: "json, name=TableType" })
  tableType?: string;
}
