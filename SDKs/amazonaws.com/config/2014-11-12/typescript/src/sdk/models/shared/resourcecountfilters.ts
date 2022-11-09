import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceCountFilters
/** 
 * Filters the resource count based on account ID, region, and resource type.
**/
export class ResourceCountFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
