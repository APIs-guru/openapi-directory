import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketPermissionException
/** 
 * The account specified does not have the appropriate bucket permissions.
**/
export class BucketPermissionException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
