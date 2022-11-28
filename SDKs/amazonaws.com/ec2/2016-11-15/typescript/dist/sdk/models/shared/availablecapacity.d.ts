import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceCapacity } from "./instancecapacity";
/**
 * The capacity information for instances that can be launched onto the Dedicated Host.
**/
export declare class AvailableCapacity extends SpeakeasyBase {
    availableInstanceCapacity?: InstanceCapacity[];
    availableVCpus?: number;
}
