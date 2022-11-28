import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { PlacementGroupStrategyEnum } from "./placementgroupstrategyenum";
/**
 * <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
**/
export declare class PlacementGroupConfig extends SpeakeasyBase {
    instanceRole: InstanceRoleTypeEnum;
    placementStrategy?: PlacementGroupStrategyEnum;
}
