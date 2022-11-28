import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastName" })
  forecastName?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
