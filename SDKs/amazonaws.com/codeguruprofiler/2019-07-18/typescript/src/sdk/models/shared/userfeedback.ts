import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedbackTypeEnum } from "./feedbacktypeenum";


// UserFeedback
/** 
 * Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
**/
export class UserFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: FeedbackTypeEnum;
}
