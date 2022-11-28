import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChallengeResponseType } from "./challengeresponsetype";
import { EventContextDataType } from "./eventcontextdatatype";
import { EventFeedbackType } from "./eventfeedbacktype";
import { EventResponseTypeEnum } from "./eventresponsetypeenum";
import { EventRiskType } from "./eventrisktype";
import { EventTypeEnum } from "./eventtypeenum";



// AuthEventType
/** 
 * The authentication event type.
**/
export class AuthEventType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChallengeResponses", elemType: ChallengeResponseType })
  challengeResponses?: ChallengeResponseType[];

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventContextData" })
  eventContextData?: EventContextDataType;

  @SpeakeasyMetadata({ data: "json, name=EventFeedback" })
  eventFeedback?: EventFeedbackType;

  @SpeakeasyMetadata({ data: "json, name=EventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=EventResponse" })
  eventResponse?: EventResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventRisk" })
  eventRisk?: EventRiskType;

  @SpeakeasyMetadata({ data: "json, name=EventType" })
  eventType?: EventTypeEnum;
}
