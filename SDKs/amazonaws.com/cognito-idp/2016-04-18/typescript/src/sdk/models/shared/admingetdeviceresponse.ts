import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";



// AdminGetDeviceResponse
/** 
 * Gets the device response, as an administrator.
**/
export class AdminGetDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Device" })
  device: DeviceType;
}
