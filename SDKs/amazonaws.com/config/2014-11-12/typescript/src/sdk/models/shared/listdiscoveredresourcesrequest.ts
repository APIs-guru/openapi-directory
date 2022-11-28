import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ListDiscoveredResourcesRequest
/** 
 * <p/>
**/
export class ListDiscoveredResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeDeletedResources" })
  includeDeletedResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
