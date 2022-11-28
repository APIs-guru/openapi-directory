import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForecastSummary
/** 
 * Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.
**/
export class ForecastSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastName" })
  forecastName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
