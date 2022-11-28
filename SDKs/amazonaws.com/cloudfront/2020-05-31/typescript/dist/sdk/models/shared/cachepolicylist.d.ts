import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicySummary } from "./cachepolicysummary";
/**
 * A list of cache policies.
**/
export declare class CachePolicyList extends SpeakeasyBase {
    items?: CachePolicySummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
