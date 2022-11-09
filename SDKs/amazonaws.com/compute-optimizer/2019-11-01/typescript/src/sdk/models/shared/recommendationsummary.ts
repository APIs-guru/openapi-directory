import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";
import { Summary } from "./summary";


// RecommendationSummary
/** 
 * A summary of a recommendation.
**/
export class RecommendationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=recommendationResourceType" })
  recommendationResourceType?: RecommendationSourceTypeEnum;

  @Metadata({ data: "json, name=summaries", elemType: shared.Summary })
  summaries?: Summary[];
}
