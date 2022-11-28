import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyCacheBehaviors
/** 
 * You cannot create more cache behaviors for the distribution.
**/
export class TooManyCacheBehaviors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
