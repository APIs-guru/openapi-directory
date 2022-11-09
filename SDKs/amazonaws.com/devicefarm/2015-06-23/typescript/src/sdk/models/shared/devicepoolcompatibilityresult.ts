import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";
import { IncompatibilityMessage } from "./incompatibilitymessage";


// DevicePoolCompatibilityResult
/** 
 * Represents a device pool compatibility result.
**/
export class DevicePoolCompatibilityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatible" })
  compatible?: boolean;

  @Metadata({ data: "json, name=device" })
  device?: Device;

  @Metadata({ data: "json, name=incompatibilityMessages", elemType: shared.IncompatibilityMessage })
  incompatibilityMessages?: IncompatibilityMessage[];
}
