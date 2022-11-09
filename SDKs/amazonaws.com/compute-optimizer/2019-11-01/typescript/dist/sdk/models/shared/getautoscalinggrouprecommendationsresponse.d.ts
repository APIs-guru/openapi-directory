import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingGroupRecommendation } from "./autoscalinggrouprecommendation";
import { GetRecommendationError } from "./getrecommendationerror";
export declare class GetAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];
    errors?: GetRecommendationError[];
    nextToken?: string;
}
