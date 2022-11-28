import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { Tag } from "./tag";



export class CreateDatasetImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: DataSource;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName: string;

  @SpeakeasyMetadata({ data: "json, name=GeolocationFormat" })
  geolocationFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TimeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=TimestampFormat" })
  timestampFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=UseGeolocationForTimeZone" })
  useGeolocationForTimeZone?: boolean;
}
