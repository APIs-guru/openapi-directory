import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EvaluateExpressionInput
/** 
 * Contains the parameters for EvaluateExpression.
**/
export class EvaluateExpressionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
