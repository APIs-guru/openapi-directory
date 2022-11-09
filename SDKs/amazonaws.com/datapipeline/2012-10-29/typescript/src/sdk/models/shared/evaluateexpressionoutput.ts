import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EvaluateExpressionOutput
/** 
 * Contains the output of EvaluateExpression.
**/
export class EvaluateExpressionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluatedExpression" })
  evaluatedExpression: string;
}
