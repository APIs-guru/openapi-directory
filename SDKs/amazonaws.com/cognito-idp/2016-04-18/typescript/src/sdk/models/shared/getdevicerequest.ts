import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeviceRequest
/** 
 * Represents the request to get the device.
**/
export class GetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;
}
