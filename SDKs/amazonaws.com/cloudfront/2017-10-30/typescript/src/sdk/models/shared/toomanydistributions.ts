import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyDistributions
/** 
 * Processing your request would cause you to exceed the maximum number of distributions allowed.
**/
export class TooManyDistributions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
