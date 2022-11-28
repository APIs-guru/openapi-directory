import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceTemplate
/** 
 * An object representing a device for a placement template (see <a>PlacementTemplate</a>).
**/
export class DeviceTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackOverrides" })
  callbackOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: string;
}
