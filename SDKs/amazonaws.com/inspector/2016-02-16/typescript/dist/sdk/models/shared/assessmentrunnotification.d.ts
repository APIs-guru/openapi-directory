import { SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
import { AssessmentRunNotificationSnsStatusCodeEnum } from "./assessmentrunnotificationsnsstatuscodeenum";
/**
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export declare class AssessmentRunNotification extends SpeakeasyBase {
    date: Date;
    error: boolean;
    event: InspectorEventEnum;
    message?: string;
    snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCodeEnum;
    snsTopicArn?: string;
}
