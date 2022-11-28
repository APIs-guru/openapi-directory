import { SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyHeaderBehaviorEnum } from "./originrequestpolicyheaderbehaviorenum";
import { Headers } from "./headers";
/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
**/
export declare class OriginRequestPolicyHeadersConfig extends SpeakeasyBase {
    headerBehavior: OriginRequestPolicyHeaderBehaviorEnum;
    headers?: Headers;
}
