import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroupStrategyEnum } from "./placementgroupstrategyenum";



// PlacementGroupInfo
/** 
 * Describes the placement group support of the instance type.
**/
export class PlacementGroupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  supportedStrategies?: PlacementGroupStrategyEnum[];
}
