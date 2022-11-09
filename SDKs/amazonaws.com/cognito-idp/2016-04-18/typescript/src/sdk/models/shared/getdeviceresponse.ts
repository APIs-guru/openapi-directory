import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceType } from "./devicetype";


// GetDeviceResponse
/** 
 * Gets the device response.
**/
export class GetDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Device" })
  device: DeviceType;
}
