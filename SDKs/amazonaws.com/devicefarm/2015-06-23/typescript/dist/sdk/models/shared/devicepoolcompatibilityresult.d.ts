import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { IncompatibilityMessage } from "./incompatibilitymessage";
/**
 * Represents a device pool compatibility result.
**/
export declare class DevicePoolCompatibilityResult extends SpeakeasyBase {
    compatible?: boolean;
    device?: Device;
    incompatibilityMessages?: IncompatibilityMessage[];
}
