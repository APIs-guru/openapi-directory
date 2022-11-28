import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEnum } from "./datasourceenum";



export class StartContinuousExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: DataSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=exportId" })
  exportId?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaStorageConfig" })
  schemaStorageConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
