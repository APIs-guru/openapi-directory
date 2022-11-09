import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Anomaly } from "./anomaly";
import { Recommendation } from "./recommendation";


// GetRecommendationsResponse
/** 
 * The structure representing the GetRecommendationsResponse.
**/
export class GetRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=anomalies", elemType: shared.Anomaly })
  anomalies: Anomaly[];

  @Metadata({ data: "json, name=profileEndTime" })
  profileEndTime: Date;

  @Metadata({ data: "json, name=profileStartTime" })
  profileStartTime: Date;

  @Metadata({ data: "json, name=profilingGroupName" })
  profilingGroupName: string;

  @Metadata({ data: "json, name=recommendations", elemType: shared.Recommendation })
  recommendations: Recommendation[];
}
