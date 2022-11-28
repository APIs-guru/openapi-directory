import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * The bucket and key of an item stored in Amazon S3.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: string;

  @SpeakeasyMetadata()
  s3Key?: string;
}
