import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePool } from "./devicepool";
/**
 * Represents the result of a list device pools request.
**/
export declare class ListDevicePoolsResult extends SpeakeasyBase {
    devicePools?: DevicePool[];
    nextToken?: string;
}
