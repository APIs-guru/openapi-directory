import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityMailFromDomainAttributes } from "./identitymailfromdomainattributes";
/**
 * Represents the custom MAIL FROM attributes for a list of identities.
**/
export declare class GetIdentityMailFromDomainAttributesResponse extends SpeakeasyBase {
    mailFromDomainAttributes: Map<string, IdentityMailFromDomainAttributes>;
}
