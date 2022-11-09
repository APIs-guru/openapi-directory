import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReactionEnum } from "./reactionenum";
/**
 *  Information about the recommendation feedback.
**/
export declare class RecommendationFeedback extends SpeakeasyBase {
    codeReviewArn?: string;
    createdTimeStamp?: Date;
    lastUpdatedTimeStamp?: Date;
    reactions?: ReactionEnum[];
    recommendationId?: string;
    userId?: string;
}
