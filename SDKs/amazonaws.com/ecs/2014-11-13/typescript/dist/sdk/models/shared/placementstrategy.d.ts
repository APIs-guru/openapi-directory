import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementStrategyTypeEnum } from "./placementstrategytypeenum";
/**
 * The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class PlacementStrategy extends SpeakeasyBase {
    field?: string;
    type?: PlacementStrategyTypeEnum;
}
