import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyInvalidationsInProgress
/** 
 * You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
**/
export class TooManyInvalidationsInProgress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
