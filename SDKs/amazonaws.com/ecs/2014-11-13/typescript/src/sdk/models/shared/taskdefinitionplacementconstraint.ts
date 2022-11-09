import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskDefinitionPlacementConstraintTypeEnum } from "./taskdefinitionplacementconstrainttypeenum";


// TaskDefinitionPlacementConstraint
/** 
 * <p>An object representing a constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints are not supported for tasks run on Fargate.</p> </note>
**/
export class TaskDefinitionPlacementConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=type" })
  type?: TaskDefinitionPlacementConstraintTypeEnum;
}
