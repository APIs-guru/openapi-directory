import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFeedback } from "./userfeedback";



// AnomalyInstance
/** 
 * The specific duration in which the metric is flagged as anomalous.
**/
export class AnomalyInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=userFeedback" })
  userFeedback?: UserFeedback;
}
