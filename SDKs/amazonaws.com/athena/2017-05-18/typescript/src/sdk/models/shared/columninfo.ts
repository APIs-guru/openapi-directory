import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnNullableEnum } from "./columnnullableenum";


// ColumnInfo
/** 
 * Information about the columns in a query execution result.
**/
export class ColumnInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=CatalogName" })
  catalogName?: string;

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Nullable" })
  nullable?: ColumnNullableEnum;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=Scale" })
  scale?: number;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
