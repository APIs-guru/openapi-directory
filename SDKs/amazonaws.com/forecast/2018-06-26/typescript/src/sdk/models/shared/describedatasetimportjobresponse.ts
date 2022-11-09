import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSource } from "./datasource";
import { Statistics } from "./statistics";


export class DescribeDatasetImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataSize" })
  dataSize?: number;

  @Metadata({ data: "json, name=DataSource" })
  dataSource?: DataSource;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn?: string;

  @Metadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName?: string;

  @Metadata({ data: "json, name=EstimatedTimeRemainingInMinutes" })
  estimatedTimeRemainingInMinutes?: number;

  @Metadata({ data: "json, name=FieldStatistics", elemType: shared.Statistics })
  fieldStatistics?: Map<string, Statistics>;

  @Metadata({ data: "json, name=GeolocationFormat" })
  geolocationFormat?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TimeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;

  @Metadata({ data: "json, name=UseGeolocationForTimeZone" })
  useGeolocationForTimeZone?: boolean;
}
