import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";


// RecommendationSource
/** 
 * Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
**/
export class RecommendationSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendationSourceArn" })
  recommendationSourceArn?: string;

  @Metadata({ data: "json, name=recommendationSourceType" })
  recommendationSourceType?: RecommendationSourceTypeEnum;
}
