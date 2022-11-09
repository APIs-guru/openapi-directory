import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingEndpointConfiguration } from "./customroutingendpointconfiguration";


export class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigurations", elemType: shared.CustomRoutingEndpointConfiguration })
  endpointConfigurations: CustomRoutingEndpointConfiguration[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;
}
