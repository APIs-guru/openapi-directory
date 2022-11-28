import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnNullableEnum } from "./columnnullableenum";



// ColumnInfo
/** 
 * Information about the columns in a query execution result.
**/
export class ColumnInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CatalogName" })
  catalogName?: string;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Nullable" })
  nullable?: ColumnNullableEnum;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=Scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
