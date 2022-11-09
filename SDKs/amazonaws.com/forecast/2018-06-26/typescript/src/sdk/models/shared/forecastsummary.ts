import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ForecastSummary
/** 
 * Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.
**/
export class ForecastSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @Metadata({ data: "json, name=ForecastName" })
  forecastName?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
