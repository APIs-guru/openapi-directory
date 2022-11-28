import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Preset } from "./preset";



// ReadPresetResponse
/** 
 * The <code>ReadPresetResponse</code> structure.
**/
export class ReadPresetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Preset" })
  preset?: Preset;
}
