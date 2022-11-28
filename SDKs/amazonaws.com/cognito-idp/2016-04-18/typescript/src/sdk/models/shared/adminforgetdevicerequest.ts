import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminForgetDeviceRequest
/** 
 * Sends the forgot device request, as an administrator.
**/
export class AdminForgetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
