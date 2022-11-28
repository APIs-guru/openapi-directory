import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeLimitsUnitTypeEnum } from "./computelimitsunittypeenum";



// ComputeLimits
/** 
 *  The EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
**/
export class ComputeLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumCapacityUnits" })
  maximumCapacityUnits: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumCoreCapacityUnits" })
  maximumCoreCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumOnDemandCapacityUnits" })
  maximumOnDemandCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumCapacityUnits" })
  minimumCapacityUnits: number;

  @SpeakeasyMetadata({ data: "json, name=UnitType" })
  unitType: ComputeLimitsUnitTypeEnum;
}
