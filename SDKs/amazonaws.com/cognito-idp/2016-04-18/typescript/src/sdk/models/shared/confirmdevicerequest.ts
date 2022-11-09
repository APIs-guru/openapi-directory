import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceSecretVerifierConfigType } from "./devicesecretverifierconfigtype";


// ConfirmDeviceRequest
/** 
 * Confirms the device request.
**/
export class ConfirmDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=DeviceSecretVerifierConfig" })
  deviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
}
