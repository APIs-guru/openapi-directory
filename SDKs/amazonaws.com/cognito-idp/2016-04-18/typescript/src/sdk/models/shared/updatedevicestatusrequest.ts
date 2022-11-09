import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";


// UpdateDeviceStatusRequest
/** 
 * Represents the request to update the device status.
**/
export class UpdateDeviceStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @Metadata({ data: "json, name=DeviceRememberedStatus" })
  deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;
}
