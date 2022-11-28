import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointDetails } from "./endpointdetails";



// GetDataflowEndpointGroupResponse
/** 
 * <p/>
**/
export class GetDataflowEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointGroupArn" })
  dataflowEndpointGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=dataflowEndpointGroupId" })
  dataflowEndpointGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointsDetails", elemType: EndpointDetails })
  endpointsDetails?: EndpointDetails[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
