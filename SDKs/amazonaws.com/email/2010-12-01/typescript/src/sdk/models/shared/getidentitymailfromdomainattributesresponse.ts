import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityMailFromDomainAttributes } from "./identitymailfromdomainattributes";



// GetIdentityMailFromDomainAttributesResponse
/** 
 * Represents the custom MAIL FROM attributes for a list of identities.
**/
export class GetIdentityMailFromDomainAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdentityMailFromDomainAttributes })
  mailFromDomainAttributes: Map<string, IdentityMailFromDomainAttributes>;
}
