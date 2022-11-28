import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EvaluateExpressionOutput
/** 
 * Contains the output of EvaluateExpression.
**/
export class EvaluateExpressionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluatedExpression" })
  evaluatedExpression: string;
}
