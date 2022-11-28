import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceFilter } from "./devicefilter";
/**
 * Represents the result of a list devices request.
**/
export declare class ListDevicesRequest extends SpeakeasyBase {
    arn?: string;
    filters?: DeviceFilter[];
    nextToken?: string;
}
