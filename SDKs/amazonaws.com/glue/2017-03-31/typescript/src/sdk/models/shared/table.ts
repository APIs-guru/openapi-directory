import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Column } from "./column";
import { StorageDescriptor } from "./storagedescriptor";
import { TableIdentifier } from "./tableidentifier";


// Table
/** 
 * Represents a collection of related data organized in columns and rows.
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsRegisteredWithLakeFormation" })
  isRegisteredWithLakeFormation?: boolean;

  @Metadata({ data: "json, name=LastAccessTime" })
  lastAccessTime?: Date;

  @Metadata({ data: "json, name=LastAnalyzedTime" })
  lastAnalyzedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=PartitionKeys", elemType: shared.Column })
  partitionKeys?: Column[];

  @Metadata({ data: "json, name=Retention" })
  retention?: number;

  @Metadata({ data: "json, name=StorageDescriptor" })
  storageDescriptor?: StorageDescriptor;

  @Metadata({ data: "json, name=TableType" })
  tableType?: string;

  @Metadata({ data: "json, name=TargetTable" })
  targetTable?: TableIdentifier;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;

  @Metadata({ data: "json, name=ViewExpandedText" })
  viewExpandedText?: string;

  @Metadata({ data: "json, name=ViewOriginalText" })
  viewOriginalText?: string;
}
