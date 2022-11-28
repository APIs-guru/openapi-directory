import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// ColumnMetadata
/** 
 * Metadata for column in the table.
**/
export class ColumnMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
