import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";



export class CreateCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointGroup" })
  endpointGroup?: CustomRoutingEndpointGroup;
}
