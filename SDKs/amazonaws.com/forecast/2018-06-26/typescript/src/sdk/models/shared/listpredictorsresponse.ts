import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictorSummary } from "./predictorsummary";


export class ListPredictorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Predictors", elemType: shared.PredictorSummary })
  predictors?: PredictorSummary[];
}
