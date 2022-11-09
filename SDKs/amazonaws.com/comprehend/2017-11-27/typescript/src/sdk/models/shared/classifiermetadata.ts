import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassifierEvaluationMetrics } from "./classifierevaluationmetrics";


// ClassifierMetadata
/** 
 * Provides information about a document classifier.
**/
export class ClassifierMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: ClassifierEvaluationMetrics;

  @Metadata({ data: "json, name=NumberOfLabels" })
  numberOfLabels?: number;

  @Metadata({ data: "json, name=NumberOfTestDocuments" })
  numberOfTestDocuments?: number;

  @Metadata({ data: "json, name=NumberOfTrainedDocuments" })
  numberOfTrainedDocuments?: number;
}
