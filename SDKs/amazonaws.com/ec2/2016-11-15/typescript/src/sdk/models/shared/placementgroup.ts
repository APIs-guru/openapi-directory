import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroupStateEnum } from "./placementgroupstateenum";
import { PlacementStrategyEnum } from "./placementstrategyenum";
import { Tag } from "./tag";



// PlacementGroup
/** 
 * Describes a placement group.
**/
export class PlacementGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata()
  partitionCount?: number;

  @SpeakeasyMetadata()
  state?: PlacementGroupStateEnum;

  @SpeakeasyMetadata()
  strategy?: PlacementStrategyEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
