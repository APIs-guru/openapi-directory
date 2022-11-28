import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementStrategyTypeEnum } from "./placementstrategytypeenum";



// PlacementStrategy
/** 
 * The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.
**/
export class PlacementStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlacementStrategyTypeEnum;
}
