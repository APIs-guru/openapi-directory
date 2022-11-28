import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";



// JobWatermark
/** 
 * Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
**/
export class JobWatermark extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=InputKey" })
  inputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetWatermarkId" })
  presetWatermarkId?: string;
}
