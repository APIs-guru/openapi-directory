import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataflowEndpointListItem
/** 
 * Item in a list of <code>DataflowEndpoint</code> groups.
**/
export class DataflowEndpointListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointGroupArn" })
  dataflowEndpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointGroupId" })
  dataflowEndpointGroupId?: string;
}
