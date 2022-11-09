import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";


// AdminUpdateDeviceStatusRequest
/** 
 * The request to update the device status, as an administrator.
**/
export class AdminUpdateDeviceStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @Metadata({ data: "json, name=DeviceRememberedStatus" })
  deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
