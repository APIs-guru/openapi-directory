import { SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicySummary } from "./originrequestpolicysummary";
/**
 * A list of origin request policies.
**/
export declare class OriginRequestPolicyList extends SpeakeasyBase {
    items?: OriginRequestPolicySummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
