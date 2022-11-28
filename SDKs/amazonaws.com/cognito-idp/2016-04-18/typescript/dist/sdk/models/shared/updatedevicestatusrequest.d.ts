import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRememberedStatusTypeEnum } from "./devicerememberedstatustypeenum";
/**
 * Represents the request to update the device status.
**/
export declare class UpdateDeviceStatusRequest extends SpeakeasyBase {
    accessToken: string;
    deviceKey: string;
    deviceRememberedStatus?: DeviceRememberedStatusTypeEnum;
}
