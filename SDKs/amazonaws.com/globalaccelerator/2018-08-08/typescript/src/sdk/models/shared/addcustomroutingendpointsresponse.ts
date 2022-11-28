import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointDescription } from "./customroutingendpointdescription";



export class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointDescriptions", elemType: CustomRoutingEndpointDescription })
  endpointDescriptions?: CustomRoutingEndpointDescription[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn?: string;
}
