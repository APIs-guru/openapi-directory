import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";


// GetDeviceResult
/** 
 * Represents the result of a get device request.
**/
export class GetDeviceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: Device;
}
