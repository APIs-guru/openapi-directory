import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceEnum } from "./datasourceenum";


export class StartContinuousExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSourceEnum;

  @Metadata({ data: "json, name=exportId" })
  exportId?: string;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=schemaStorageConfig" })
  schemaStorageConfig?: Map<string, string>;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
