import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sends the forgot device request, as an administrator.
**/
export declare class AdminForgetDeviceRequest extends SpeakeasyBase {
    deviceKey: string;
    userPoolId: string;
    username: string;
}
