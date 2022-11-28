import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResultQualifier } from "./evaluationresultqualifier";



// EvaluationResultIdentifier
/** 
 * Uniquely identifies an evaluation result.
**/
export class EvaluationResultIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationResultQualifier" })
  evaluationResultQualifier?: EvaluationResultQualifier;

  @SpeakeasyMetadata({ data: "json, name=OrderingTimestamp" })
  orderingTimestamp?: Date;
}
