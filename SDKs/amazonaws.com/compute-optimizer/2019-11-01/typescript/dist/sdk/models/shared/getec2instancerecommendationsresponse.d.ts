import { SpeakeasyBase } from "../../../internal/utils";
import { GetRecommendationError } from "./getrecommendationerror";
import { InstanceRecommendation } from "./instancerecommendation";
export declare class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
    errors?: GetRecommendationError[];
    instanceRecommendations?: InstanceRecommendation[];
    nextToken?: string;
}
