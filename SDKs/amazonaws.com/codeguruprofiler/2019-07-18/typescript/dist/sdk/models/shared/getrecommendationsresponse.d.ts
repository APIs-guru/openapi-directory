import { SpeakeasyBase } from "../../../internal/utils";
import { Anomaly } from "./anomaly";
import { Recommendation } from "./recommendation";
/**
 * The structure representing the GetRecommendationsResponse.
**/
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    anomalies: Anomaly[];
    profileEndTime: Date;
    profileStartTime: Date;
    profilingGroupName: string;
    recommendations: Recommendation[];
}
