import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Preset } from "./preset";



// ListPresetsResponse
/** 
 * The <code>ListPresetsResponse</code> structure.
**/
export class ListPresetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Presets", elemType: Preset })
  presets?: Preset[];
}
