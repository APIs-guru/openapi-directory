import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeLimitsUnitTypeEnum } from "./computelimitsunittypeenum";


// ComputeLimits
/** 
 *  The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
**/
export class ComputeLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumCapacityUnits" })
  maximumCapacityUnits: number;

  @Metadata({ data: "json, name=MaximumCoreCapacityUnits" })
  maximumCoreCapacityUnits?: number;

  @Metadata({ data: "json, name=MaximumOnDemandCapacityUnits" })
  maximumOnDemandCapacityUnits?: number;

  @Metadata({ data: "json, name=MinimumCapacityUnits" })
  minimumCapacityUnits: number;

  @Metadata({ data: "json, name=UnitType" })
  unitType: ComputeLimitsUnitTypeEnum;
}
