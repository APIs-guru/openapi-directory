import { SpeakeasyBase } from "../../../internal/utils";
import { ExportFormatEnum } from "./exportformatenum";
import { ExportStatusEnum } from "./exportstatusenum";
import { S3SseAlgorithmEnum } from "./s3ssealgorithmenum";
/**
 * Represents the properties of the exported table.
**/
export declare class ExportDescription extends SpeakeasyBase {
    billedSizeBytes?: number;
    clientToken?: string;
    endTime?: Date;
    exportArn?: string;
    exportFormat?: ExportFormatEnum;
    exportManifest?: string;
    exportStatus?: ExportStatusEnum;
    exportTime?: Date;
    failureCode?: string;
    failureMessage?: string;
    itemCount?: number;
    s3Bucket?: string;
    s3BucketOwner?: string;
    s3Prefix?: string;
    s3SseAlgorithm?: S3SseAlgorithmEnum;
    s3SseKmsKeyId?: string;
    startTime?: Date;
    tableArn?: string;
    tableId?: string;
}
