import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cipher
/** 
 * Information about a cipher used in a policy.
**/
export class Cipher extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  priority?: number;
}
