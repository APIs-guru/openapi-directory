import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserBucketDetails
/** 
 * Describes the Amazon S3 bucket for the disk image.
**/
export class UserBucketDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: string;

  @SpeakeasyMetadata()
  s3Key?: string;
}
