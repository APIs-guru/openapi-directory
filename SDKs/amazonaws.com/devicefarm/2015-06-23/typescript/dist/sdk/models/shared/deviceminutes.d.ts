import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
**/
export declare class DeviceMinutes extends SpeakeasyBase {
    metered?: number;
    total?: number;
    unmetered?: number;
}
