import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PredictorSummary
/** 
 * Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
**/
export class PredictorSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @Metadata({ data: "json, name=PredictorName" })
  predictorName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
