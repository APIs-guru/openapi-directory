import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateStorageLocationResultMessage
/** 
 * Results of a <a>CreateStorageLocationResult</a> call.
**/
export class CreateStorageLocationResultMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: string;
}
