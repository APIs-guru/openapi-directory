import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceFilters
/** 
 * Filters the results by resource account ID, region, resource ID, and resource name.
**/
export class ResourceFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
