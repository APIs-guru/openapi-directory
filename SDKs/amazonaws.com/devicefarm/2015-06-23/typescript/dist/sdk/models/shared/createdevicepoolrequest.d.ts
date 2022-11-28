import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Represents a request to the create device pool operation.
**/
export declare class CreateDevicePoolRequest extends SpeakeasyBase {
    description?: string;
    maxDevices?: number;
    name: string;
    projectArn: string;
    rules: Rule[];
}
