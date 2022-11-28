import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
**/
export declare class Cpu extends SpeakeasyBase {
    architecture?: string;
    clock?: number;
    frequency?: string;
}
