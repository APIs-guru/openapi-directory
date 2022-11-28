import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightFeedbackOptionEnum } from "./insightfeedbackoptionenum";



// InsightFeedback
/** 
 *  Information about insight feedback received from a customer. 
**/
export class InsightFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Feedback" })
  feedback?: InsightFeedbackOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
