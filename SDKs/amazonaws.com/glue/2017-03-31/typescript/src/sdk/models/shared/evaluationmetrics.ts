import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindMatchesMetrics } from "./findmatchesmetrics";
import { TransformTypeEnum } from "./transformtypeenum";


// EvaluationMetrics
/** 
 * Evaluation metrics provide an estimate of the quality of your machine learning transform.
**/
export class EvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=FindMatchesMetrics" })
  findMatchesMetrics?: FindMatchesMetrics;

  @Metadata({ data: "json, name=TransformType" })
  transformType: TransformTypeEnum;
}
