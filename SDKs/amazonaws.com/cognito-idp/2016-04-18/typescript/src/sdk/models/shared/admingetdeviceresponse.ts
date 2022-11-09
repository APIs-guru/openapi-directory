import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceType } from "./devicetype";


// AdminGetDeviceResponse
/** 
 * Gets the device response, as an administrator.
**/
export class AdminGetDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Device" })
  device: DeviceType;
}
