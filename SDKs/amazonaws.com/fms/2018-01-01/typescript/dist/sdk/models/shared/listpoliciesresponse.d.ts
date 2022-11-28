import { SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";
export declare class ListPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    policyList?: PolicySummary[];
}
