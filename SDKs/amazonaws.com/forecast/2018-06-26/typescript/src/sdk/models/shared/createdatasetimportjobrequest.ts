import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSource } from "./datasource";
import { Tag } from "./tag";


export class CreateDatasetImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSource" })
  dataSource: DataSource;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn: string;

  @Metadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName: string;

  @Metadata({ data: "json, name=GeolocationFormat" })
  geolocationFormat?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TimeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;

  @Metadata({ data: "json, name=UseGeolocationForTimeZone" })
  useGeolocationForTimeZone?: boolean;
}
