import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeviceRequest
/** 
 * Represents the request to get the device.
**/
export class GetDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;
}
