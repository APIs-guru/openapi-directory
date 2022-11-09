import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Table
/** 
 * An object representing the properties of a table in a workbook.
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableId" })
  tableId?: string;

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;
}
