import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterDeviceResponse
/** 
 * Response to a RegisterDevice request.
**/
export class RegisterDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;
}
