import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { ExportStatusEnum } from "./exportstatusenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";


// ExportDescription
/** 
 * Represents the properties of the exported table.
**/
export class ExportDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BilledSizeBytes" })
  billedSizeBytes?: number;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ExportArn" })
  exportArn?: string;

  @Metadata({ data: "json, name=ExportFormat" })
  exportFormat?: ExportFormatEnum;

  @Metadata({ data: "json, name=ExportManifest" })
  exportManifest?: string;

  @Metadata({ data: "json, name=ExportStatus" })
  exportStatus?: ExportStatusEnum;

  @Metadata({ data: "json, name=ExportTime" })
  exportTime?: Date;

  @Metadata({ data: "json, name=FailureCode" })
  failureCode?: string;

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3BucketOwner" })
  s3BucketOwner?: string;

  @Metadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @Metadata({ data: "json, name=S3SseAlgorithm" })
  s3SseAlgorithm?: S3SseAlgorithmEnum;

  @Metadata({ data: "json, name=S3SseKmsKeyId" })
  s3SseKmsKeyId?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @Metadata({ data: "json, name=TableId" })
  tableId?: string;
}
