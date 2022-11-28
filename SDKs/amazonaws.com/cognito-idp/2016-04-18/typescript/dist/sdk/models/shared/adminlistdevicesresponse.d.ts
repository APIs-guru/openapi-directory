import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";
/**
 * Lists the device's response, as an administrator.
**/
export declare class AdminListDevicesResponse extends SpeakeasyBase {
    devices?: DeviceType[];
    paginationToken?: string;
}
