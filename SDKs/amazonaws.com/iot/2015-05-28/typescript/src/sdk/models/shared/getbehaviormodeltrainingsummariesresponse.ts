import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorModelTrainingSummary } from "./behaviormodeltrainingsummary";



export class GetBehaviorModelTrainingSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: BehaviorModelTrainingSummary })
  summaries?: BehaviorModelTrainingSummary[];
}
