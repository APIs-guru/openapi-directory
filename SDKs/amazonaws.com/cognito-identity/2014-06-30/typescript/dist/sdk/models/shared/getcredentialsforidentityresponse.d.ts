import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
/**
 * Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
**/
export declare class GetCredentialsForIdentityResponse extends SpeakeasyBase {
    credentials?: Credentials;
    identityId?: string;
}
