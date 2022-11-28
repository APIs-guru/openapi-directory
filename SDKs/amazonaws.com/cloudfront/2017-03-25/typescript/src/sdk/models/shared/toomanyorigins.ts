import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyOrigins
/** 
 * You cannot create more origins for the distribution.
**/
export class TooManyOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
