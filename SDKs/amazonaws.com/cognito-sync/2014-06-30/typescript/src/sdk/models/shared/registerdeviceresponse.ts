import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterDeviceResponse
/** 
 * Response to a RegisterDevice request.
**/
export class RegisterDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;
}
