import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Column } from "./column";
import { Column } from "./column";


// TableMetadata
/** 
 * Contains metadata for a table.
**/
export class TableMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Columns", elemType: shared.Column })
  columns?: Column[];

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=PartitionKeys", elemType: shared.Column })
  partitionKeys?: Column[];

  @Metadata({ data: "json, name=TableType" })
  tableType?: string;
}
