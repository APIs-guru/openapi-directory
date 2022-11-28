import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReactionEnum } from "./reactionenum";



// RecommendationFeedbackSummary
/** 
 *  Information about recommendation feedback summaries. 
**/
export class RecommendationFeedbackSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reactions" })
  reactions?: ReactionEnum[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
