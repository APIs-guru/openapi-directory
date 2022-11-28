import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";
/**
 * <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note>
**/
export declare class PlacementConstraint extends SpeakeasyBase {
    expression?: string;
    type?: PlacementConstraintTypeEnum;
}
