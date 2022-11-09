import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoaContentTypeEnum } from "./loacontenttypeenum";


// Loa
/** 
 * Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
**/
export class Loa extends SpeakeasyBase {
  @Metadata({ data: "json, name=loaContent" })
  loaContent?: string;

  @Metadata({ data: "json, name=loaContentType" })
  loaContentType?: LoaContentTypeEnum;
}
