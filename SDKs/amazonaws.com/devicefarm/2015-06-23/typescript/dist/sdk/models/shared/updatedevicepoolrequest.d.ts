import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Represents a request to the update device pool operation.
**/
export declare class UpdateDevicePoolRequest extends SpeakeasyBase {
    arn: string;
    clearMaxDevices?: boolean;
    description?: string;
    maxDevices?: number;
    name?: string;
    rules?: Rule[];
}
