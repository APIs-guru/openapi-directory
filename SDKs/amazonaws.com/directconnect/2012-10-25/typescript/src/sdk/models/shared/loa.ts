import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";



// Loa
/** 
 * Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
**/
export class Loa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loaContent" })
  loaContent?: string;

  @SpeakeasyMetadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;
}
