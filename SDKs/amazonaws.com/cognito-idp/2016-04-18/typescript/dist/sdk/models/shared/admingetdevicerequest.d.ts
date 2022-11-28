import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to get the device, as an administrator.
**/
export declare class AdminGetDeviceRequest extends SpeakeasyBase {
    deviceKey: string;
    userPoolId: string;
    username: string;
}
