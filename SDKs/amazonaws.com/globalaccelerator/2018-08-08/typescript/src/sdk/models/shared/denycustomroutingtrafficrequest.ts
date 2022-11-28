import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DenyAllTrafficToEndpoint" })
  denyAllTrafficToEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DestinationAddresses" })
  destinationAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=DestinationPorts" })
  destinationPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId: string;
}
