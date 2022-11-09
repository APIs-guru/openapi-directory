import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";


// EventFeedbackType
/** 
 * Specifies the event feedback type.
**/
export class EventFeedbackType extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeedbackDate" })
  feedbackDate?: Date;

  @Metadata({ data: "json, name=FeedbackValue" })
  feedbackValue: FeedbackValueTypeEnum;

  @Metadata({ data: "json, name=Provider" })
  provider: string;
}
