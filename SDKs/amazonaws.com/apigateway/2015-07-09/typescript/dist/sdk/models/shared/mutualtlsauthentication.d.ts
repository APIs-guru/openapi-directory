import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export declare class MutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
    truststoreWarnings?: string[];
}
