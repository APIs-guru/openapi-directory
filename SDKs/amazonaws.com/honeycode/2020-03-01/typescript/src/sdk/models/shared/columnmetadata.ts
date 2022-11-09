import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// ColumnMetadata
/** 
 * Metadata for column in the table.
**/
export class ColumnMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format: FormatEnum;

  @Metadata({ data: "json, name=name" })
  name: string;
}
