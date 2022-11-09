import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ChallengeResponses", elemType: shared.ChallengeResponseType })
  challengeResponses?: ChallengeResponseType[];

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=EventContextData" })
  eventContextData?: EventContextDataType;

  @Metadata({ data: "json, name=EventFeedback" })
  eventFeedback?: EventFeedbackType;

  @Metadata({ data: "json, name=EventId" })
  eventId?: string;

  @Metadata({ data: "json, name=EventResponse" })
  eventResponse?: EventResponseTypeEnum;

  @Metadata({ data: "json, name=EventRisk" })
  eventRisk?: EventRiskType;

  @Metadata({ data: "json, name=EventType" })
  eventType?: EventTypeEnum;
}
