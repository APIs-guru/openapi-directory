import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyHeaderBehaviorEnum } from "./originrequestpolicyheaderbehaviorenum";
import { Headers } from "./headers";



// OriginRequestPolicyHeadersConfig
/** 
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
**/
export class OriginRequestPolicyHeadersConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerBehavior: OriginRequestPolicyHeaderBehaviorEnum;

  @SpeakeasyMetadata()
  headers?: Headers;
}
