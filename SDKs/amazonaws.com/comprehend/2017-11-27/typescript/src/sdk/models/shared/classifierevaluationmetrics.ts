import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassifierEvaluationMetrics
/** 
 * Describes the result metrics for the test data associated with an documentation classifier.
**/
export class ClassifierEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accuracy" })
  accuracy?: number;

  @Metadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=HammingLoss" })
  hammingLoss?: number;

  @Metadata({ data: "json, name=MicroF1Score" })
  microF1Score?: number;

  @Metadata({ data: "json, name=MicroPrecision" })
  microPrecision?: number;

  @Metadata({ data: "json, name=MicroRecall" })
  microRecall?: number;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;
}
