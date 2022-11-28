import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForgetDeviceRequest
/** 
 * Represents the request to forget the device.
**/
export class ForgetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;
}
