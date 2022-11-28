import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { IncompatibilityMessage } from "./incompatibilitymessage";



// DevicePoolCompatibilityResult
/** 
 * Represents a device pool compatibility result.
**/
export class DevicePoolCompatibilityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatible" })
  compatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: Device;

  @SpeakeasyMetadata({ data: "json, name=incompatibilityMessages", elemType: IncompatibilityMessage })
  incompatibilityMessages?: IncompatibilityMessage[];
}
