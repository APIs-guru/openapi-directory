import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";



// ListDiscoveredResourcesResponse
/** 
 * <p/>
**/
export class ListDiscoveredResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIdentifiers", elemType: ResourceIdentifier })
  resourceIdentifiers?: ResourceIdentifier[];
}
