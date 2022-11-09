import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Preset } from "./preset";


// ListPresetsResponse
/** 
 * The <code>ListPresetsResponse</code> structure.
**/
export class ListPresetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=Presets", elemType: shared.Preset })
  presets?: Preset[];
}
