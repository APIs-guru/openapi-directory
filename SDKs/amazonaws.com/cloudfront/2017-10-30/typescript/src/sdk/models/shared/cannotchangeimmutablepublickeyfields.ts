import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CannotChangeImmutablePublicKeyFields
/** 
 * You can't change the value of a public key.
**/
export class CannotChangeImmutablePublicKeyFields extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
