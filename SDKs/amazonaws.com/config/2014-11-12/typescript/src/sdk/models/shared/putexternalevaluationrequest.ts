import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalEvaluation } from "./externalevaluation";



export class PutExternalEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalEvaluation" })
  externalEvaluation: ExternalEvaluation;
}
