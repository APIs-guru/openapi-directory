import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";



export class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: CustomRoutingEndpointGroup;
}
