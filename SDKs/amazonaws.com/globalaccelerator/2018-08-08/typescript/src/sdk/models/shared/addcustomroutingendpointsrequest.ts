import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingEndpointConfiguration } from "./customroutingendpointconfiguration";



export class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigurations", elemType: CustomRoutingEndpointConfiguration })
  endpointConfigurations: CustomRoutingEndpointConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
