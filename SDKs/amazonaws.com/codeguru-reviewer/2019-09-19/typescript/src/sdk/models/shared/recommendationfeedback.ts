import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReactionEnum } from "./reactionenum";



// RecommendationFeedback
/** 
 *  Information about the recommendation feedback. 
**/
export class RecommendationFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reactions" })
  reactions?: ReactionEnum[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationId" })
  recommendationId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
