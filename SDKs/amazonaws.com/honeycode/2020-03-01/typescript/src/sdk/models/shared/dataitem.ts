import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// DataItem
/** 
 * The data in a particular data cell defined on the screen.
**/
export class DataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @Metadata({ data: "json, name=overrideFormat" })
  overrideFormat?: FormatEnum;

  @Metadata({ data: "json, name=rawValue" })
  rawValue?: string;
}
