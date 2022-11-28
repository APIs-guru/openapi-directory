import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";



// PlacementConstraint
/** 
 * An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.
**/
export class PlacementConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlacementConstraintTypeEnum;
}
