import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";


// PlacementConstraint
/** 
 * <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note>
**/
export class PlacementConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=type" })
  type?: PlacementConstraintTypeEnum;
}
