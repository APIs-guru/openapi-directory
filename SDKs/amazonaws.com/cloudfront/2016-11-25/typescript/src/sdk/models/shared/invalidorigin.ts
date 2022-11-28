import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidOrigin
/** 
 * The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
**/
export class InvalidOrigin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
