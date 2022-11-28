import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PredictorSummary
/** 
 * Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
**/
export class PredictorSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorName" })
  predictorName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
