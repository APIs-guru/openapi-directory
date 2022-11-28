import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";



export class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=FeedbackValue" })
  feedbackValue: FeedbackValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
