import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
/**
 * Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
**/
export declare class RecommendationSource extends SpeakeasyBase {
    recommendationSourceArn?: string;
    recommendationSourceType?: RecommendationSourceTypeEnum;
}
