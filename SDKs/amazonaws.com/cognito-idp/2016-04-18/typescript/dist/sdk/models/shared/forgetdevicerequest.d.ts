import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to forget the device.
**/
export declare class ForgetDeviceRequest extends SpeakeasyBase {
    accessToken?: string;
    deviceKey: string;
}
