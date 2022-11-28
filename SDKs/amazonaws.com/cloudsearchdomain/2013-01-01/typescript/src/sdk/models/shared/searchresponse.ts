import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketInfo } from "./bucketinfo";
import { Hits } from "./hits";
import { FieldStats } from "./fieldstats";
import { SearchStatus } from "./searchstatus";



// SearchResponse
/** 
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets", elemType: BucketInfo })
  facets?: Map<string, BucketInfo>;

  @SpeakeasyMetadata({ data: "json, name=hits" })
  hits?: Hits;

  @SpeakeasyMetadata({ data: "json, name=stats", elemType: FieldStats })
  stats?: Map<string, FieldStats>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SearchStatus;
}
