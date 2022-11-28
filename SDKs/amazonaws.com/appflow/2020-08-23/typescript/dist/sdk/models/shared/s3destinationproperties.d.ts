import { SpeakeasyBase } from "../../../internal/utils";
import { S3OutputFormatConfig } from "./s3outputformatconfig";
/**
 *  The properties that are applied when Amazon S3 is used as a destination.
**/
export declare class S3DestinationProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
    s3OutputFormatConfig?: S3OutputFormatConfig;
}
