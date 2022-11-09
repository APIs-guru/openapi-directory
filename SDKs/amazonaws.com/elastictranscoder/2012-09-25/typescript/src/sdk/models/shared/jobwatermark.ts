import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";


// JobWatermark
/** 
 * Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
**/
export class JobWatermark extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=InputKey" })
  inputKey?: string;

  @Metadata({ data: "json, name=PresetWatermarkId" })
  presetWatermarkId?: string;
}
