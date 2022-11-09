import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternalEvaluation } from "./externalevaluation";


export class PutExternalEvaluationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ExternalEvaluation" })
  externalEvaluation: ExternalEvaluation;
}
