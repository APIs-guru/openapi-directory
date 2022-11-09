import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserFeedback } from "./userfeedback";


// AnomalyInstance
/** 
 * The specific duration in which the metric is flagged as anomalous.
**/
export class AnomalyInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=userFeedback" })
  userFeedback?: UserFeedback;
}
