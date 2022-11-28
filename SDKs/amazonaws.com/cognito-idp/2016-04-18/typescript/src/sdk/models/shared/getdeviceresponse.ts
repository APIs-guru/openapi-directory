import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";



// GetDeviceResponse
/** 
 * Gets the device response.
**/
export class GetDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Device" })
  device: DeviceType;
}
