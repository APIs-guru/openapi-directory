import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminForgetDeviceRequest
/** 
 * Sends the forgot device request, as an administrator.
**/
export class AdminForgetDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
