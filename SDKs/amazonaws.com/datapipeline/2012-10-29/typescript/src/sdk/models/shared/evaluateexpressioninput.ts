import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EvaluateExpressionInput
/** 
 * Contains the parameters for EvaluateExpression.
**/
export class EvaluateExpressionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression: string;

  @Metadata({ data: "json, name=objectId" })
  objectId: string;

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
