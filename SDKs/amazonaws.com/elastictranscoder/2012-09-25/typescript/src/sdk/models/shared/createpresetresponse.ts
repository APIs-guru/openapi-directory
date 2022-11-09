import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Preset } from "./preset";


// CreatePresetResponse
/** 
 * The <code>CreatePresetResponse</code> structure.
**/
export class CreatePresetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Preset" })
  preset?: Preset;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}
