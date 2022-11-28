import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionEnum } from "./reactionenum";
/**
 *  Information about recommendation feedback summaries.
**/
export declare class RecommendationFeedbackSummary extends SpeakeasyBase {
    reactions?: ReactionEnum[];
    recommendationId?: string;
    userId?: string;
}
