import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Anomaly } from "./anomaly";
import { Recommendation } from "./recommendation";



// GetRecommendationsResponse
/** 
 * The structure representing the GetRecommendationsResponse.
**/
export class GetRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anomalies", elemType: Anomaly })
  anomalies: Anomaly[];

  @SpeakeasyMetadata({ data: "json, name=profileEndTime" })
  profileEndTime: Date;

  @SpeakeasyMetadata({ data: "json, name=profileStartTime" })
  profileStartTime: Date;

  @SpeakeasyMetadata({ data: "json, name=profilingGroupName" })
  profilingGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: Recommendation })
  recommendations: Recommendation[];
}
