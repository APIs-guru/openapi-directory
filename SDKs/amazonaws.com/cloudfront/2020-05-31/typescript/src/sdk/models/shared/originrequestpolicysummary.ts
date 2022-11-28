import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";
import { OriginRequestPolicyTypeEnum } from "./originrequestpolicytypeenum";



// OriginRequestPolicySummary
/** 
 * Contains an origin request policy.
**/
export class OriginRequestPolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicy: OriginRequestPolicy;

  @SpeakeasyMetadata()
  type: OriginRequestPolicyTypeEnum;
}
