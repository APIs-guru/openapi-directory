import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Table
/** 
 * An object representing the properties of a table in a workbook.
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;
}
