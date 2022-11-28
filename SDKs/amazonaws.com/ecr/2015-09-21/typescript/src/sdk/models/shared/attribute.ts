import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribute
/** 
 * This data type is used in the <a>ImageScanFinding</a> data type.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
