import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
import { AssessmentRunNotificationSnsStatusCodeEnum } from "./assessmentrunnotificationsnsstatuscodeenum";



// AssessmentRunNotification
/** 
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export class AssessmentRunNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: boolean;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=snsPublishStatusCode" })
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;
}
