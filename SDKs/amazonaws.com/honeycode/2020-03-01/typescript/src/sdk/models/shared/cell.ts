import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// Cell
/** 
 * An object that represents a single cell in a table.
**/
export class Cell extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: FormatEnum;

  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @Metadata({ data: "json, name=formula" })
  formula?: string;

  @Metadata({ data: "json, name=rawValue" })
  rawValue?: string;
}
