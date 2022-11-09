import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";
/**
 * An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.
**/
export declare class PlacementConstraint extends SpeakeasyBase {
    expression?: string;
    type?: PlacementConstraintTypeEnum;
}
