import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { ExportStatusEnum } from "./exportstatusenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";



// ExportDescription
/** 
 * Represents the properties of the exported table.
**/
export class ExportDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BilledSizeBytes" })
  billedSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExportArn" })
  exportArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ExportFormat" })
  exportFormat?: ExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=ExportManifest" })
  exportManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=ExportStatus" })
  exportStatus?: ExportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ExportTime" })
  exportTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureCode" })
  failureCode?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketOwner" })
  s3BucketOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=S3SseAlgorithm" })
  s3SseAlgorithm?: S3SseAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=S3SseKmsKeyId" })
  s3SseKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableId" })
  tableId?: string;
}
