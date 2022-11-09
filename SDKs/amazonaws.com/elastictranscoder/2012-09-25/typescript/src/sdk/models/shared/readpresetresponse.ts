import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Preset } from "./preset";


// ReadPresetResponse
/** 
 * The <code>ReadPresetResponse</code> structure.
**/
export class ReadPresetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Preset" })
  preset?: Preset;
}
