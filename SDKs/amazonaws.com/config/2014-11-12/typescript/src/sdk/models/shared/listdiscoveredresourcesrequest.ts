import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ListDiscoveredResourcesRequest
/** 
 * <p/>
**/
export class ListDiscoveredResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeDeletedResources" })
  includeDeletedResources?: boolean;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
