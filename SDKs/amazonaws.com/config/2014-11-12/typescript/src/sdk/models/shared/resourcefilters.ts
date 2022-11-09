import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceFilters
/** 
 * Filters the results by resource account ID, region, resource ID, and resource name.
**/
export class ResourceFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
