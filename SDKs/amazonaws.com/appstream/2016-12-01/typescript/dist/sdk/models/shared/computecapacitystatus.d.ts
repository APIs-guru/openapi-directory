import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the capacity status for a fleet.
**/
export declare class ComputeCapacityStatus extends SpeakeasyBase {
    available?: number;
    desired: number;
    inUse?: number;
    running?: number;
}
