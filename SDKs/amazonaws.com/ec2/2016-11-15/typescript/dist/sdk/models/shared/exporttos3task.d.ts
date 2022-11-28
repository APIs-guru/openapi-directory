import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerFormatEnum } from "./containerformatenum";
import { DiskImageFormatEnum } from "./diskimageformatenum";
/**
 * Describes the format and location for the export task.
**/
export declare class ExportToS3Task extends SpeakeasyBase {
    containerFormat?: ContainerFormatEnum;
    diskImageFormat?: DiskImageFormatEnum;
    s3Bucket?: string;
    s3Key?: string;
}
