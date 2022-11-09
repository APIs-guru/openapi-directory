import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceTemplate
/** 
 * An object representing a device for a placement template (see <a>PlacementTemplate</a>).
**/
export class DeviceTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=callbackOverrides" })
  callbackOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: string;
}
