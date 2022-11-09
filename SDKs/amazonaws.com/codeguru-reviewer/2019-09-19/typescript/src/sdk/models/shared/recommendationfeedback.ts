import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReactionEnum } from "./reactionenum";


// RecommendationFeedback
/** 
 *  Information about the recommendation feedback. 
**/
export class RecommendationFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @Metadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @Metadata({ data: "json, name=Reactions" })
  reactions?: ReactionEnum[];

  @Metadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
