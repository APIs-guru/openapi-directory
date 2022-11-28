import { SpeakeasyBase } from "../../../internal/utils";
import { TlsSecurityPolicyEnum } from "./tlssecuritypolicyenum";
/**
 * The domain's endpoint options.
**/
export declare class DomainEndpointOptions extends SpeakeasyBase {
    enforceHttps?: boolean;
    tlsSecurityPolicy?: TlsSecurityPolicyEnum;
}
