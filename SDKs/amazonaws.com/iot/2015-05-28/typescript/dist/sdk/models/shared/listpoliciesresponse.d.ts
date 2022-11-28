import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * The output from the ListPolicies operation.
**/
export declare class ListPoliciesResponse extends SpeakeasyBase {
    nextMarker?: string;
    policies?: Policy[];
}
