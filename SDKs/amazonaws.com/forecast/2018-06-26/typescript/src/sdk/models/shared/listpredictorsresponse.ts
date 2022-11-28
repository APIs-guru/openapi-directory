import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictorSummary } from "./predictorsummary";



export class ListPredictorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Predictors", elemType: PredictorSummary })
  predictors?: PredictorSummary[];
}
