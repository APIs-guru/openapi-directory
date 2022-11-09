import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";


export class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventId" })
  eventId: string;

  @Metadata({ data: "json, name=FeedbackValue" })
  feedbackValue: FeedbackValueTypeEnum;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
