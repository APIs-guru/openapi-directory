import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ForgetDeviceRequest
/** 
 * Represents the request to forget the device.
**/
export class ForgetDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;
}
