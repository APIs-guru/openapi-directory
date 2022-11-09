import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightFeedbackOptionEnum } from "./insightfeedbackoptionenum";


// InsightFeedback
/** 
 *  Information about insight feedback received from a customer. 
**/
export class InsightFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=Feedback" })
  feedback?: InsightFeedbackOptionEnum;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
