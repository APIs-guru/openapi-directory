import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// TableColumn
/** 
 * An object that contains attributes about a single column in a table
**/
export class TableColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: FormatEnum;

  @Metadata({ data: "json, name=tableColumnId" })
  tableColumnId?: string;

  @Metadata({ data: "json, name=tableColumnName" })
  tableColumnName?: string;
}
