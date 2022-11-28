import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeResponseType } from "./challengeresponsetype";
import { EventContextDataType } from "./eventcontextdatatype";
import { EventFeedbackType } from "./eventfeedbacktype";
import { EventResponseTypeEnum } from "./eventresponsetypeenum";
import { EventRiskType } from "./eventrisktype";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * The authentication event type.
**/
export declare class AuthEventType extends SpeakeasyBase {
    challengeResponses?: ChallengeResponseType[];
    creationDate?: Date;
    eventContextData?: EventContextDataType;
    eventFeedback?: EventFeedbackType;
    eventId?: string;
    eventResponse?: EventResponseTypeEnum;
    eventRisk?: EventRiskType;
    eventType?: EventTypeEnum;
}
