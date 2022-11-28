import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BundleTaskError
/** 
 * Describes an error for <a>BundleInstance</a>.
**/
export class BundleTaskError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
