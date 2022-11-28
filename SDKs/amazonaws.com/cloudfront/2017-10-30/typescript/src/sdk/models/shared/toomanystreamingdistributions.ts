import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyStreamingDistributions
/** 
 * Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
**/
export class TooManyStreamingDistributions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
