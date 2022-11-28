import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
import { Summary } from "./summary";



// RecommendationSummary
/** 
 * A summary of a recommendation.
**/
export class RecommendationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationResourceType" })
  recommendationResourceType?: RecommendationSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: Summary })
  summaries?: Summary[];
}
