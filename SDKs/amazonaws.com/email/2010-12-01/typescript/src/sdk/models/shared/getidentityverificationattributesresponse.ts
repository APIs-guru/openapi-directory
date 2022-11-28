import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityVerificationAttributes } from "./identityverificationattributes";



// GetIdentityVerificationAttributesResponse
/** 
 * The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
**/
export class GetIdentityVerificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdentityVerificationAttributes })
  verificationAttributes: Map<string, IdentityVerificationAttributes>;
}
