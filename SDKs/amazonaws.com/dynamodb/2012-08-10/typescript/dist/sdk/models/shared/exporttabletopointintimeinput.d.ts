import { SpeakeasyBase } from "../../../internal/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";
export declare class ExportTableToPointInTimeInput extends SpeakeasyBase {
    clientToken?: string;
    exportFormat?: ExportFormatEnum;
    exportTime?: Date;
    s3Bucket: string;
    s3BucketOwner?: string;
    s3Prefix?: string;
    s3SseAlgorithm?: S3SseAlgorithmEnum;
    s3SseKmsKeyId?: string;
    tableArn: string;
}
