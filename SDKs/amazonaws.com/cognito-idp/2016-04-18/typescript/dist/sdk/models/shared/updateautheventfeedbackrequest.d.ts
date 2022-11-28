import { SpeakeasyBase } from "../../../internal/utils";
import { FeedbackValueTypeEnum } from "./feedbackvaluetypeenum";
export declare class UpdateAuthEventFeedbackRequest extends SpeakeasyBase {
    eventId: string;
    feedbackToken: string;
    feedbackValue: FeedbackValueTypeEnum;
    userPoolId: string;
    username: string;
}
