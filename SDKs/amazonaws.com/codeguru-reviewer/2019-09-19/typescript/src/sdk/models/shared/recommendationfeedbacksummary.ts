import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReactionEnum } from "./reactionenum";


// RecommendationFeedbackSummary
/** 
 *  Information about recommendation feedback summaries. 
**/
export class RecommendationFeedbackSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reactions" })
  reactions?: ReactionEnum[];

  @Metadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
