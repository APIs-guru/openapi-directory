import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
export declare class ListAttachedPoliciesResponse extends SpeakeasyBase {
    nextMarker?: string;
    policies?: Policy[];
}
