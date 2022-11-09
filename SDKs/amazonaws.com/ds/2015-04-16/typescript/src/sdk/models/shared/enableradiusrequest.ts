import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RadiusSettings } from "./radiussettings";


// EnableRadiusRequest
/** 
 * Contains the inputs for the <a>EnableRadius</a> operation.
**/
export class EnableRadiusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RadiusSettings" })
  radiusSettings: RadiusSettings;
}
