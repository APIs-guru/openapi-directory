import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEnum } from "./datasourceenum";
import { ContinuousExportStatusEnum } from "./continuousexportstatusenum";



// ContinuousExportDescription
/** 
 * A list of continuous export descriptions.
**/
export class ContinuousExportDescription extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ContinuousExportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusDetail" })
  statusDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=stopTime" })
  stopTime?: Date;
}
