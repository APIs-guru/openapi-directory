import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityVerificationAttributes } from "./identityverificationattributes";
/**
 * The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
**/
export declare class GetIdentityVerificationAttributesResponse extends SpeakeasyBase {
    verificationAttributes: Map<string, IdentityVerificationAttributes>;
}
