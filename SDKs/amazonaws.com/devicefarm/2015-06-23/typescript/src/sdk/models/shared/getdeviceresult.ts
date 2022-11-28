import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// GetDeviceResult
/** 
 * Represents the result of a get device request.
**/
export class GetDeviceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: Device;
}
