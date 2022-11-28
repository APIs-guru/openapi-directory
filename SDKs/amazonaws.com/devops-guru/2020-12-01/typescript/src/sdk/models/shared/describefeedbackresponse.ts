import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightFeedback } from "./insightfeedback";



export class DescribeFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightFeedback" })
  insightFeedback?: InsightFeedback;
}
