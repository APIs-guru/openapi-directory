import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointDetails } from "./endpointdetails";


// GetDataflowEndpointGroupResponse
/** 
 * <p/>
**/
export class GetDataflowEndpointGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataflowEndpointGroupArn" })
  dataflowEndpointGroupArn?: string;

  @Metadata({ data: "json, name=dataflowEndpointGroupId" })
  dataflowEndpointGroupId?: string;

  @Metadata({ data: "json, name=endpointsDetails", elemType: shared.EndpointDetails })
  endpointsDetails?: EndpointDetails[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
