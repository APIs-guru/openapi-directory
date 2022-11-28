import { SpeakeasyBase } from "../../../internal/utils";
import { FeedbackTypeEnum } from "./feedbacktypeenum";
/**
 * Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
**/
export declare class UserFeedback extends SpeakeasyBase {
    type: FeedbackTypeEnum;
}
