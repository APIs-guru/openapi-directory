import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NoSuchBucketException
/** 
 * The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.
**/
export class NoSuchBucketException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
