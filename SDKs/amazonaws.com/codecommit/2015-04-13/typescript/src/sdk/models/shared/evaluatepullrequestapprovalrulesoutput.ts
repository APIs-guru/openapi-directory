import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Evaluation } from "./evaluation";


export class EvaluatePullRequestApprovalRulesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluation" })
  evaluation: Evaluation;
}
