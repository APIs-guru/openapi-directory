import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";


export class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: CustomRoutingEndpointGroup;
}
