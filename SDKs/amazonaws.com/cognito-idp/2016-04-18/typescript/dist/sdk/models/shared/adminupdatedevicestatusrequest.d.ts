import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";
/**
 * The request to update the device status, as an administrator.
**/
export declare class AdminUpdateDeviceStatusRequest extends SpeakeasyBase {
    deviceKey: string;
    deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;
    userPoolId: string;
    username: string;
}
