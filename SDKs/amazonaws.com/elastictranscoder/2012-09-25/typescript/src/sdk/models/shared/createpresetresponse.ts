import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Preset } from "./preset";



// CreatePresetResponse
/** 
 * The <code>CreatePresetResponse</code> structure.
**/
export class CreatePresetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Preset" })
  preset?: Preset;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}
