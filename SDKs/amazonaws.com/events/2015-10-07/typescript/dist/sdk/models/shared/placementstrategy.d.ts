import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementStrategyTypeEnum } from "./placementstrategytypeenum";
/**
 * The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.
**/
export declare class PlacementStrategy extends SpeakeasyBase {
    field?: string;
    type?: PlacementStrategyTypeEnum;
}
