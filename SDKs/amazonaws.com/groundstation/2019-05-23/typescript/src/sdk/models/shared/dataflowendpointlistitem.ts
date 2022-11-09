import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataflowEndpointListItem
/** 
 * Item in a list of <code>DataflowEndpoint</code> groups.
**/
export class DataflowEndpointListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataflowEndpointGroupArn" })
  dataflowEndpointGroupArn?: string;

  @Metadata({ data: "json, name=dataflowEndpointGroupId" })
  dataflowEndpointGroupId?: string;
}
