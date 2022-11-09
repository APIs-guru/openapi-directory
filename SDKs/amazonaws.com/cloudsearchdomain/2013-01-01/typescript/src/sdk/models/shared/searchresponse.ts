import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketInfo } from "./bucketinfo";
import { Hits } from "./hits";
import { FieldStats } from "./fieldstats";
import { SearchStatus } from "./searchstatus";


// SearchResponse
/** 
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=facets", elemType: shared.BucketInfo })
  facets?: Map<string, BucketInfo>;

  @Metadata({ data: "json, name=hits" })
  hits?: Hits;

  @Metadata({ data: "json, name=stats", elemType: shared.FieldStats })
  stats?: Map<string, FieldStats>;

  @Metadata({ data: "json, name=status" })
  status?: SearchStatus;
}
