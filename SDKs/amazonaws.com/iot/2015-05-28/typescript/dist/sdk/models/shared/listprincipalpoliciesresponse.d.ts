import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * The output from the ListPrincipalPolicies operation.
**/
export declare class ListPrincipalPoliciesResponse extends SpeakeasyBase {
    nextMarker?: string;
    policies?: Policy[];
}
