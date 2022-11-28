import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeLimitsUnitTypeEnum } from "./computelimitsunittypeenum";
/**
 *  The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
**/
export declare class ComputeLimits extends SpeakeasyBase {
    maximumCapacityUnits: number;
    maximumCoreCapacityUnits?: number;
    maximumOnDemandCapacityUnits?: number;
    minimumCapacityUnits: number;
    unitType: ComputeLimitsUnitTypeEnum;
}
