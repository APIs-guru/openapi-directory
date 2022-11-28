import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionSummary } from "./distributionsummary";
/**
 * A distribution list.
**/
export declare class DistributionList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: DistributionSummary[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
