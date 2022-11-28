import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingDestinationConfiguration } from "./customroutingdestinationconfiguration";



export class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationConfigurations", elemType: CustomRoutingDestinationConfiguration })
  destinationConfigurations: CustomRoutingDestinationConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupRegion" })
  endpointGroupRegion: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;
}
