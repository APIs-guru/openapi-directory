import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @Metadata({ data: "json, name=ForecastName" })
  forecastName?: string;

  @Metadata({ data: "json, name=ForecastTypes" })
  forecastTypes?: string[];

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
