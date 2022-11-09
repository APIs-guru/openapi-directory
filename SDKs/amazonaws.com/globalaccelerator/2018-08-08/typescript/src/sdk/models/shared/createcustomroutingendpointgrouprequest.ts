import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingDestinationConfiguration } from "./customroutingdestinationconfiguration";


export class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationConfigurations", elemType: shared.CustomRoutingDestinationConfiguration })
  destinationConfigurations: CustomRoutingDestinationConfiguration[];

  @Metadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
