import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSecretVerifierConfigType } from "./devicesecretverifierconfigtype";
/**
 * Confirms the device request.
**/
export declare class ConfirmDeviceRequest extends SpeakeasyBase {
    accessToken: string;
    deviceKey: string;
    deviceName?: string;
    deviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
}
