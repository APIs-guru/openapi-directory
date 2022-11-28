import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowAllTrafficToEndpoint" })
  allowAllTrafficToEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DestinationAddresses" })
  destinationAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=DestinationPorts" })
  destinationPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=EndpointGroupArn" })
  endpointGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId: string;
}
