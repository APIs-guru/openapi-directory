import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";



export class EvaluatePullRequestApprovalRulesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluation" })
  evaluation: Evaluation;
}
