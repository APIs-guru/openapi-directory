import { SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";
export declare class AdminUpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    eventId: string;
    feedbackValue: FeedbackValueTypeEnum;
    userPoolId: string;
    username: string;
}
