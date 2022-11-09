import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataflowEndpointListItem } from "./dataflowendpointlistitem";


// ListDataflowEndpointGroupsResponse
/** 
 * <p/>
**/
export class ListDataflowEndpointGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataflowEndpointGroupList", elemType: shared.DataflowEndpointListItem })
  dataflowEndpointGroupList?: DataflowEndpointListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
