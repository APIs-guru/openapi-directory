import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSourceTypeEnum } from "./recommendationsourcetypeenum";



// RecommendationSource
/** 
 * Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
**/
export class RecommendationSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendationSourceArn" })
  recommendationSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationSourceType" })
  recommendationSourceType?: RecommendationSourceTypeEnum;
}
