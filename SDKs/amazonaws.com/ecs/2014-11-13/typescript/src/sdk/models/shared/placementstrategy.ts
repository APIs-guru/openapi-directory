import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementStrategyTypeEnum } from "./placementstrategytypeenum";


// PlacementStrategy
/** 
 * The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class PlacementStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=type" })
  type?: PlacementStrategyTypeEnum;
}
