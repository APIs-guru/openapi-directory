import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Represents the result of a list devices operation.
**/
export declare class ListDevicesResult extends SpeakeasyBase {
    devices?: Device[];
    nextToken?: string;
}
