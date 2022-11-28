import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionSummary } from "./streamingdistributionsummary";
/**
 * A streaming distribution list.
**/
export declare class StreamingDistributionList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: StreamingDistributionSummary[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
