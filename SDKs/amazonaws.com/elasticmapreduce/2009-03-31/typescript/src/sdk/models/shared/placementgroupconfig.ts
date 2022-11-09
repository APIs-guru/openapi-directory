import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { PlacementGroupStrategyEnum } from "./placementgroupstrategyenum";


// PlacementGroupConfig
/** 
 * <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
**/
export class PlacementGroupConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceRole" })
  instanceRole: InstanceRoleTypeEnum;

  @Metadata({ data: "json, name=PlacementStrategy" })
  placementStrategy?: PlacementGroupStrategyEnum;
}
