import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationResultQualifier } from "./evaluationresultqualifier";


// EvaluationResultIdentifier
/** 
 * Uniquely identifies an evaluation result.
**/
export class EvaluationResultIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationResultQualifier" })
  evaluationResultQualifier?: EvaluationResultQualifier;

  @Metadata({ data: "json, name=OrderingTimestamp" })
  orderingTimestamp?: Date;
}
