import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";



// EventFeedbackType
/** 
 * Specifies the event feedback type.
**/
export class EventFeedbackType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeedbackDate" })
  feedbackDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FeedbackValue" })
  feedbackValue: FeedbackValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Provider" })
  provider: string;
}
