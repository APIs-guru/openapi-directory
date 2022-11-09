import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attribute
/** 
 * This data type is used in the <a>ImageScanFinding</a> data type.
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
