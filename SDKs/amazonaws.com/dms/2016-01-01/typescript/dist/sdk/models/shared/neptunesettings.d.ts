import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information that defines an Amazon Neptune endpoint.
**/
export declare class NeptuneSettings extends SpeakeasyBase {
    errorRetryDuration?: number;
    iamAuthEnabled?: boolean;
    maxFileSize?: number;
    maxRetryCount?: number;
    s3BucketFolder: string;
    s3BucketName: string;
    serviceAccessRoleArn?: string;
}
