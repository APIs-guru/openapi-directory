import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RadiusSettings } from "./radiussettings";


// UpdateRadiusRequest
/** 
 * Contains the inputs for the <a>UpdateRadius</a> operation.
**/
export class UpdateRadiusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RadiusSettings" })
  radiusSettings: RadiusSettings;
}
