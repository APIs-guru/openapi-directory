import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// DataItem
/** 
 * The data in a particular data cell defined on the screen.
**/
export class DataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=overrideFormat" })
  overrideFormat?: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=rawValue" })
  rawValue?: string;
}
