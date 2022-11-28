import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesConfiguration } from "./reservedinstancesconfiguration";
/**
 * Describes the modification request/s.
**/
export declare class ReservedInstancesModificationResult extends SpeakeasyBase {
    reservedInstancesId?: string;
    targetConfiguration?: ReservedInstancesConfiguration;
}
