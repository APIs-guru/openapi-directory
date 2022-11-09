import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminGetDeviceRequest
/** 
 * Represents the request to get the device, as an administrator.
**/
export class AdminGetDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
