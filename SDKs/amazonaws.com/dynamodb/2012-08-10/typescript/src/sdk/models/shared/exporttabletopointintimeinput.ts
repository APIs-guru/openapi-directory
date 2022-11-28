import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";



export class ExportTableToPointInTimeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ExportFormat" })
  exportFormat?: ExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=ExportTime" })
  exportTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketOwner" })
  s3BucketOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=S3SseAlgorithm" })
  s3SseAlgorithm?: S3SseAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=S3SseKmsKeyId" })
  s3SseKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=TableArn" })
  tableArn: string;
}
