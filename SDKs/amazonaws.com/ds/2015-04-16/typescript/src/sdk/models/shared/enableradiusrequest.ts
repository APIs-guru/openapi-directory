import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";



// EnableRadiusRequest
/** 
 * Contains the inputs for the <a>EnableRadius</a> operation.
**/
export class EnableRadiusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RadiusSettings" })
  radiusSettings: RadiusSettings;
}
