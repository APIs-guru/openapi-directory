import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketInfo } from "./bucketinfo";
import { Hits } from "./hits";
import { FieldStats } from "./fieldstats";
import { SearchStatus } from "./searchstatus";
/**
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
**/
export declare class SearchResponse extends SpeakeasyBase {
    facets?: Map<string, BucketInfo>;
    hits?: Hits;
    stats?: Map<string, FieldStats>;
    status?: SearchStatus;
}
