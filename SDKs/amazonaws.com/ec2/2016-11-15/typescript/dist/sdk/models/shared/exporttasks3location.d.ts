import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the destination for an export image task.
**/
export declare class ExportTaskS3Location extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
