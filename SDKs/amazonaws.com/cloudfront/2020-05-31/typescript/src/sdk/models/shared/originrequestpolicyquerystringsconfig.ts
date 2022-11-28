import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyQueryStringBehaviorEnum } from "./originrequestpolicyquerystringbehaviorenum";
import { QueryStringNames } from "./querystringnames";



// OriginRequestPolicyQueryStringsConfig
/** 
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
**/
export class OriginRequestPolicyQueryStringsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryStringBehavior: OriginRequestPolicyQueryStringBehaviorEnum;

  @SpeakeasyMetadata()
  queryStrings?: QueryStringNames;
}
