import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassifierEvaluationMetrics
/** 
 * Describes the result metrics for the test data associated with an documentation classifier.
**/
export class ClassifierEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accuracy" })
  accuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=HammingLoss" })
  hammingLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=MicroF1Score" })
  microF1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=MicroPrecision" })
  microPrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=MicroRecall" })
  microRecall?: number;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;
}
