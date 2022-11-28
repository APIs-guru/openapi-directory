import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// Cell
/** 
 * An object that represents a single cell in a table.
**/
export class Cell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=rawValue" })
  rawValue?: string;
}
