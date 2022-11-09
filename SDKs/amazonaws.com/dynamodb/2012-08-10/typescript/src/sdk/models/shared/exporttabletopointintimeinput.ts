import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";


export class ExportTableToPointInTimeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=ExportFormat" })
  exportFormat?: ExportFormatEnum;

  @Metadata({ data: "json, name=ExportTime" })
  exportTime?: Date;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @Metadata({ data: "json, name=S3BucketOwner" })
  s3BucketOwner?: string;

  @Metadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @Metadata({ data: "json, name=S3SseAlgorithm" })
  s3SseAlgorithm?: S3SseAlgorithmEnum;

  @Metadata({ data: "json, name=S3SseKmsKeyId" })
  s3SseKmsKeyId?: string;

  @Metadata({ data: "json, name=TableArn" })
  tableArn: string;
}
