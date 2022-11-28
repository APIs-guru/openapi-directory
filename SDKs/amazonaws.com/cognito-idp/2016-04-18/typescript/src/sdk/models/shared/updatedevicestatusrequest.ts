import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";



// UpdateDeviceStatusRequest
/** 
 * Represents the request to update the device status.
**/
export class UpdateDeviceStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceRememberedStatus" })
  deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;
}
