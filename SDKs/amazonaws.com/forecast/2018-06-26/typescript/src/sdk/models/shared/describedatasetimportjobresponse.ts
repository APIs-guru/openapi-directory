import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { Statistics } from "./statistics";



export class DescribeDatasetImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSize" })
  dataSize?: number;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource?: DataSource;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=FieldStatistics", elemType: Statistics })
  fieldStatistics?: Map<string, Statistics>;

  @SpeakeasyMetadata({ data: "json, name=GeolocationFormat" })
  geolocationFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=UseGeolocationForTimeZone" })
  useGeolocationForTimeZone?: boolean;
}
