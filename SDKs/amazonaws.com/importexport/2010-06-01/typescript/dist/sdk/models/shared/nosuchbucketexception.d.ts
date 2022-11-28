import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.
**/
export declare class NoSuchBucketException extends SpeakeasyBase {
    message?: string;
}
