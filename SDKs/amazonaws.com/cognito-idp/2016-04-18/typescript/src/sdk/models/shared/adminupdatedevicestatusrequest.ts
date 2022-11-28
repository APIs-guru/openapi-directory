import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";



// AdminUpdateDeviceStatusRequest
/** 
 * The request to update the device status, as an administrator.
**/
export class AdminUpdateDeviceStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceRememberedStatus" })
  deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
