import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";
/**
 * Represents a collection of device types.
**/
export declare class DevicePool extends SpeakeasyBase {
    arn?: string;
    description?: string;
    maxDevices?: number;
    name?: string;
    rules?: Rule[];
    type?: DevicePoolTypeEnum;
}
