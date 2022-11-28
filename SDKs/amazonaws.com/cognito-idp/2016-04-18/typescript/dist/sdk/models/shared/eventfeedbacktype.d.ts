import { SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";
/**
 * Specifies the event feedback type.
**/
export declare class EventFeedbackType extends SpeakeasyBase {
    feedbackDate?: Date;
    feedbackValue: FeedbackValueTypeEnum;
    provider: string;
}
