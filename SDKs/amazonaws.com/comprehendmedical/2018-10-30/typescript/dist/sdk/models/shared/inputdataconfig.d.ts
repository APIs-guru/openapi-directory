import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
**/
export declare class InputDataConfig extends SpeakeasyBase {
    s3Bucket: string;
    s3Key?: string;
}
