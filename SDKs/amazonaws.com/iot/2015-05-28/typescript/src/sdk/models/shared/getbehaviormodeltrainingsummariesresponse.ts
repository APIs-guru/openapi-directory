import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BehaviorModelTrainingSummary } from "./behaviormodeltrainingsummary";


export class GetBehaviorModelTrainingSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=summaries", elemType: shared.BehaviorModelTrainingSummary })
  summaries?: BehaviorModelTrainingSummary[];
}
