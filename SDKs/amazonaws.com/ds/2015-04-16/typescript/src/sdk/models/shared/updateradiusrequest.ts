import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";



// UpdateRadiusRequest
/** 
 * Contains the inputs for the <a>UpdateRadius</a> operation.
**/
export class UpdateRadiusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RadiusSettings" })
  radiusSettings: RadiusSettings;
}
