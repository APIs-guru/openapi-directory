import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassifierEvaluationMetrics } from "./classifierevaluationmetrics";



// ClassifierMetadata
/** 
 * Provides information about a document classifier.
**/
export class ClassifierMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: ClassifierEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=NumberOfLabels" })
  numberOfLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTestDocuments" })
  numberOfTestDocuments?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTrainedDocuments" })
  numberOfTrainedDocuments?: number;
}
