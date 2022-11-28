import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSecretVerifierConfigType } from "./devicesecretverifierconfigtype";



// ConfirmDeviceRequest
/** 
 * Confirms the device request.
**/
export class ConfirmDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceKey" })
  deviceKey: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceSecretVerifierConfig" })
  deviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
}
