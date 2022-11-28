import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminGetDeviceRequest
/** 
 * Represents the request to get the device, as an administrator.
**/
export class AdminGetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
