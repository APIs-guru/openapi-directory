import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceType } from "./devicetype";
/**
 * Represents the response to list devices.
**/
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: DeviceType[];
    paginationToken?: string;
}
