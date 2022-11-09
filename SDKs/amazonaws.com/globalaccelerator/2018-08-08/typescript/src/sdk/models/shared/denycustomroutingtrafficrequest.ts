import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DenyAllTrafficToEndpoint" })
  denyAllTrafficToEndpoint?: boolean;

  @Metadata({ data: "json, name=DestinationAddresses" })
  destinationAddresses?: string[];

  @Metadata({ data: "json, name=DestinationPorts" })
  destinationPorts?: number[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId: string;
}
