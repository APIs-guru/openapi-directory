import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// TableColumn
/** 
 * An object that contains attributes about a single column in a table
**/
export class TableColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=tableColumnId" })
  tableColumnId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableColumnName" })
  tableColumnName?: string;
}
