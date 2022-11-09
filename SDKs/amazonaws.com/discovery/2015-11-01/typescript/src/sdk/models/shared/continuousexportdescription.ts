import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceEnum } from "./datasourceenum";
import { ContinuousExportStatusEnum } from "./continuousexportstatusenum";


// ContinuousExportDescription
/** 
 * A list of continuous export descriptions.
**/
export class ContinuousExportDescription extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=status" })
  status?: ContinuousExportStatusEnum;

  @Metadata({ data: "json, name=statusDetail" })
  statusDetail?: string;

  @Metadata({ data: "json, name=stopTime" })
  stopTime?: Date;
}
