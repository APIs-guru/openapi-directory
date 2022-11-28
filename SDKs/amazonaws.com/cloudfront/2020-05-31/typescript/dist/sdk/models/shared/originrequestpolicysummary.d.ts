import { SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";
import { OriginRequestPolicyTypeEnum } from "./originrequestpolicytypeenum";
/**
 * Contains an origin request policy.
**/
export declare class OriginRequestPolicySummary extends SpeakeasyBase {
    originRequestPolicy: OriginRequestPolicy;
    type: OriginRequestPolicyTypeEnum;
}
