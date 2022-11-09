import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
import { AssessmentRunNotificationSnsStatusCodeEnum } from "./assessmentrunnotificationsnsstatuscodeenum";


// AssessmentRunNotification
/** 
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export class AssessmentRunNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=error" })
  error: boolean;

  @Metadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=snsPublishStatusCode" })
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCodeEnum;

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;
}
