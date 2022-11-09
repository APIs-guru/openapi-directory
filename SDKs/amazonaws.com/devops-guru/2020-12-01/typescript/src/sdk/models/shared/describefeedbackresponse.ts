import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightFeedback } from "./insightfeedback";


export class DescribeFeedbackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightFeedback" })
  insightFeedback?: InsightFeedback;
}
