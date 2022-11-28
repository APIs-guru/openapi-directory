import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityDkimAttributes } from "./identitydkimattributes";



// GetIdentityDkimAttributesResponse
/** 
 * Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
**/
export class GetIdentityDkimAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdentityDkimAttributes })
  dkimAttributes: Map<string, IdentityDkimAttributes>;
}
