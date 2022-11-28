import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataflowEndpointListItem } from "./dataflowendpointlistitem";



// ListDataflowEndpointGroupsResponse
/** 
 * <p/>
**/
export class ListDataflowEndpointGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointGroupList", elemType: DataflowEndpointListItem })
  dataflowEndpointGroupList?: DataflowEndpointListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
