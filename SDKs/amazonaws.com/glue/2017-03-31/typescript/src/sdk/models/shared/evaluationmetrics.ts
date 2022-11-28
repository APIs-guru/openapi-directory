import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindMatchesMetrics } from "./findmatchesmetrics";
import { TransformTypeEnum } from "./transformtypeenum";



// EvaluationMetrics
/** 
 * Evaluation metrics provide an estimate of the quality of your machine learning transform.
**/
export class EvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FindMatchesMetrics" })
  findMatchesMetrics?: FindMatchesMetrics;

  @SpeakeasyMetadata({ data: "json, name=TransformType" })
  transformType: TransformTypeEnum;
}
