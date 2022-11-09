import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceIdentifier } from "./resourceidentifier";


// ListDiscoveredResourcesResponse
/** 
 * <p/>
**/
export class ListDiscoveredResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceIdentifiers", elemType: shared.ResourceIdentifier })
  resourceIdentifiers?: ResourceIdentifier[];
}
