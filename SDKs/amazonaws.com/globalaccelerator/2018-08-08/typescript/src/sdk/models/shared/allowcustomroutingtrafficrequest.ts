import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowAllTrafficToEndpoint" })
  allowAllTrafficToEndpoint?: boolean;

  @Metadata({ data: "json, name=DestinationAddresses" })
  destinationAddresses?: string[];

  @Metadata({ data: "json, name=DestinationPorts" })
  destinationPorts?: number[];

  @Metadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @Metadata({ data: "json, name=EndpointId" })
  endpointId: string;
}
